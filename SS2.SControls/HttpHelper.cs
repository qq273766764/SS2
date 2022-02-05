using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace SS2
{
    public class HttpHelper
    {
        //gbk2312 转UTF8
        public static string gbk2312toutf8LanChange(string str)
        {
            Encoding utf8;
            Encoding gb2312;
            utf8 = Encoding.GetEncoding("UTF-8");
            gb2312 = Encoding.GetEncoding("GB2312");
            byte[] gb = gb2312.GetBytes(str);
            gb = Encoding.Convert(gb2312, utf8, gb);
            return utf8.GetString(gb);
        }

        //返回发送长度，<0失败
        public static string SendBySocket(string host, int port, byte[] data)
        {
            string result = string.Empty;
            Socket clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            clientSocket.Connect(host, port);

            int sendlen = clientSocket.Send(data);

            //Console.WriteLine("Send：" + data);

            byte[] recvdata = new byte[2048];
            int receiveLength = clientSocket.Receive(recvdata);
            clientSocket.Close();

            return Encoding.UTF8.GetString(recvdata);
        }

        public static string SendHttpByScoket(string url, string json, Dictionary<string, string> header = null)
        {
            var uri = new Uri(url);
            var host = uri.Host;
            var port = uri.Port;

            //GBK2312转为UTF8
            //string bodyoutstr = gbk2312toutf8LanChange(data);
            //转换http包体 为字节
            byte[] bodyBuffer = Encoding.UTF8.GetBytes(json);
            //http头
            string head = ("POST " + url + " HTTP/1.1");
            head += "\r\nContent-Type: application/json; charset=UTF-8";
            if (header != null)
            {
                foreach (var h in header)
                {
                    head += ("\r\n" + h.Key + ": " + h.Value);
                }
            }
            //head += "\r\ncache-control: no-cache";
            head += "\r\nUser-Agent: yqxt";
            head += "\r\nAccept: */*";
            head += "\r\nHost: " + host + ":" + port;
            //head += "\r\naccept-encoding: gzip, deflate";
            head += "\r\ncontent-length: " + bodyBuffer.Length;
            //head += "\r\nConnection: keep-alive";
            head += "\r\n\r\n";
            //组装发送数据
            byte[] headsenddata = Encoding.UTF8.GetBytes(head);
            byte[] sendout = new byte[headsenddata.Length + bodyBuffer.Length];
            Buffer.BlockCopy(headsenddata, 0, sendout, 0, headsenddata.Length);
            Buffer.BlockCopy(bodyBuffer, 0, sendout, headsenddata.Length, bodyBuffer.Length);
            //发送数据
            return HttpHelper.SendBySocket(host, port, sendout);
        }

        public static string PostJsonByHttpWebRequest(string url, string jsonStr, X509Certificate2 cert = null, Encoding encoding = null)
        {
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(url);
                request.Method = "post";
                request.ContentType = "application/json;charset=UTF-8";
                if (cert != null)
                {
                    //X509Certificate2 cert = new X509Certificate2(certPath);
                    request.ClientCertificates.Add(cert);
                }
                //var jsonStr = ignoreObjectNullValue ? JsonConvert.SerializeObject(json) : JsonConvert.SerializeObject(json);
                byte[] data = encoding == null ? Encoding.UTF8.GetBytes(jsonStr) : encoding.GetBytes(jsonStr);
                request.ContentLength = data.Length;
                using (Stream reqStream = request.GetRequestStream())
                {
                    reqStream.Write(data, 0, data.Length);
                    reqStream.Close();
                }
                var response = (HttpWebResponse)request.GetResponse();
                var responseString = encoding == null ?
                    new StreamReader(response.GetResponseStream(), Encoding.UTF8).ReadToEnd() :
                    new StreamReader(response.GetResponseStream(), encoding).ReadToEnd();
                return responseString;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static string GetStringByHttpWebRequest(string url, Encoding encode = null)
        {
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(url);
                request.Method = "GET";
                request.ContentType = "application/json;charset=UTF-8";
                var response = (HttpWebResponse)request.GetResponse();
                string responseString = "";
                if (encode == null)
                {
                    responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
                }
                else
                {
                    responseString = new StreamReader(response.GetResponseStream(), encode).ReadToEnd();
                }
                return responseString;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public class IpAddrHelper
        {
            public static string GetAddrByIP(string ip)
            {
                if (ip.StartsWith(":") || ip.StartsWith("127.0") || ip.StartsWith("192.168"))
                {
                    return "内网IP";
                }

                //var db = FindAddrByIPFromDB(ip);
                //if (!string.IsNullOrEmpty(db))
                //{
                //    return db;
                //}

                string json = "";
                string error = "";
                try
                {
                    return GetAddrByID_taobao(ip, out json);
                }
                catch (Exception exp)
                {
                    error = exp.ToString();
                }
                try
                {
                    return GetAddrByID_126(ip, out json);
                }
                catch (Exception exp)
                {
                    error = "\r\n--taobao--------------\r\n" + error + "\r\n--126--------------\r\n" + exp.ToString();
                    //Logger.Error("根据IP获取登录地址错误", ip + "->" + json, error);
                    return "";
                }
            }

            /// <summary>
            /// 根据IP获取地址，默认使用淘宝接口
            /// </summary>
            /// <param name="ip"></param>
            /// <param name="apiUrl"></param>
            /// <returns></returns>
            static string GetAddrByID_taobao(string ip, out string json)
            {
                var apiUrl = "http://ip.taobao.com/service/getIpInfo.php?ip={0}";
                json = "";
                json = HttpHelper.GetStringByHttpWebRequest(string.Format(apiUrl, ip));
                if (!string.IsNullOrEmpty(json))
                {
                    var obj = JsonConvert.DeserializeObject<IP2AddrModel_taobao>(json);
                    if (obj != null)
                    {
                        //InsertAddrByIPFromDB(ip, json, obj);
                        return obj.ToString();
                    }
                }
                return "";
            }

            /// <summary>
            /// 根据IP获取地址，默认使用淘宝接口
            /// </summary>
            /// <param name="ip"></param>
            /// <param name="apiUrl"></param>
            /// <returns></returns>
            static string GetAddrByID_126(string ip, out string json)
            {
                var apiUrl = "http://ip.ws.126.net/ipquery?ip={0}";
                json = "";
                var result = HttpHelper.GetStringByHttpWebRequest(string.Format(apiUrl, ip), Encoding.GetEncoding("GBK"));
                if (!string.IsNullOrEmpty(result))
                {
                    json = "{" + result.Split('{').Last();

                    var obj = JsonConvert.DeserializeObject<IP2AddrModel_126>(json);
                    if (obj != null)
                    {
                        //InsertAddrByIPFromDB(ip, json, obj);
                        return obj.ToString();
                    }
                }
                return "";
            }

            //    static string FindAddrByIPFromDB(string ip)
            //    {
            //        string sql = @"select Text1 from gs_IP where ip={0}";
            //        using (var ctx = new System.Data.Linq.DataContext(NoHelper.ConnStr))
            //        {
            //            var data = ctx.ExecuteQuery<string>(sql, ip).ToList();
            //            return data.FirstOrDefault();
            //        }
            //    }

            //    static void InsertAddrByIPFromDB(string ip, string json, IP2AddrModel_taobao data)
            //    {
            //        if (data == null || data.data == null)
            //        {
            //            return;
            //        }

            //        string sql = "insert into gs_IP values({0},{1},{2},{3},{4},{5})";
            //        using (var ctx = new System.Data.Linq.DataContext(NoHelper.ConnStr))
            //        {
            //            ctx.ExecuteCommand(sql, ip, data.data.ToAddrString(), data.data.isp, json, data.data.ToString(), "");
            //        }
            //    }
            //    static void InsertAddrByIPFromDB(string ip, string json, IP2AddrModel_126 data)
            //    {
            //        if (data == null)
            //        {
            //            return;
            //        }

            //        string sql = "insert into gs_IP values({0},{1},{2},{3},{4},{5})";
            //        using (var ctx = new System.Data.Linq.DataContext(NoHelper.ConnStr))
            //        {
            //            ctx.ExecuteCommand(sql, ip, data.ToString(), "", json, data.ToString(), "");
            //        }
            //    }
        }

        public class IP2AddrModel_taobao
        {
            public int code { get; set; }

            public IP2AddrModel_taobao_data data { get; set; }

            public override string ToString()
            {
                return data.ToString();
            }
        }

        public class IP2AddrModel_taobao_data
        {
            public string country { get; set; }
            public string country_id { get; set; } //CN
            public string area { get; set; }
            public string area_id { get; set; }
            public string region { get; set; }
            public string region_id { get; set; }
            public string city { get; set; }
            public string city_id { get; set; }
            public string county { get; set; }
            public string county_id { get; set; }
            public string isp { get; set; }
            public string isp_id { get; set; }

            public string province { get; set; }

            public override string ToString()
            {
                if (string.IsNullOrEmpty(province))
                {
                    province = region;
                }
                if (county == "XX") county = "";
                return $"{country}{area}{province}{city}{county} {isp}";
            }

            public string ToAddrString()
            {
                if (string.IsNullOrEmpty(province))
                {
                    province = region;
                }
                if (county == "XX") county = "";
                return $"{country}{area}{province}{city}{county}";
            }

        }

        public class IP2AddrModel_126
        {

            public string city { get; set; }
            public string province { get; set; }

            public override string ToString()
            {
                return string.Format("{0} {1}", province, city);
            }
        }
    }
}