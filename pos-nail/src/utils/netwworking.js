

import { StatusBar, Platform, } from 'react-native';

let url = 'http://95.217.32.253/POSSystem/MaxViewWebService.asmx';  


const secret = 'max@@view@@01235';

export function get(api, headers) {
  return fetch(api, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then((response) => response.json().then((data) => data))
    .catch((err) => {
      // console.log('There is an error occurred while requesting api', err, api)
    });
}

export function post(api, params) {
  
  console.log('POST '+ api +' data '+ JSON.stringify(params)+'\n'+url)
  Platform.OS == 'ios' && StatusBar.setNetworkActivityIndicatorVisible(true)
  return new Promise(
    function (resolve, reject) {
      const request = new XMLHttpRequest();
      let strParams = '';
      if (params) {
        Object.keys(params).map(param => {
          strParams += '<' + param + '>' + params[param] + '</' + param + '>'
        })
      }

      var sr =
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
        + '<soap:Body>'
        + '<' + api + ' xmlns="http://tempuri.org/">'
        + '<secret>' + secret + '</secret>'
        + strParams
        + '</' + api + '>'
        + '</soap:Body>'
        + '</soap:Envelope>'
       console.log(sr)
      request.onload = function () {
        // console.log(api, this)
        Platform.OS == 'ios' && StatusBar.setNetworkActivityIndicatorVisible(false)
        if (this.status === 200) {
          // console.log(this.response)
          let data = this._response.split('<' + api + 'Result>')[1];
          data = data.split('</' + api + 'Result>')[0];
          // alert(JSON.stringify(data))
          try {
            data = JSON.parse(data)
          } catch (e) {
            data = data
          }
          let Data = '';
          console.log('response '+ api +' '+ JSON.stringify(data) +', datatype ' + typeof data)
          if (typeof data == 'string') {
            Data = data
          } 
          else {
            try {
              Data = {};
              if (data[2].Data) {
                try {
                  Data = JSON.parse(data[2].Data)
                } catch (e) {
                  Data = {}
                }

                //Data.data = JSON.parse(data[2].Data);
              }
             
              Data.meta = data[1];
              Data.dataArray = data;
             
              // Data.data = JSON.parse(data[2].Data)
            } catch (e) {
              Data = data
              if(data[1])
              Data=data[1]
              if (data[2])
                Data = data[2]

            }
          }


          let res = {
            data: Data,
            error: false,
          }
          resolve(res);
        } else {
          resolve({
            error: true,
            status: this.status
          })
          // Something went wrong (404 etc.)
          // reject(this.status);
        }
      };
      request.onerror = function () {
        Platform.OS == 'ios' && StatusBar.setNetworkActivityIndicatorVisible(false)
        // console.log(this);
        resolve({
          error: true,
          status: this.status
        })
        
      };

      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
      request.responseType = 'json';
      request.send(sr);
    });
}


export function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://9mobi.vn/cf/images/2015/03/nkk/anh-dep-1.jpg', true);

  xhr.responseType = 'arraybuffer';

  xhr.onload = function(e) {
    if (this.status == 200) {
      var uInt8Array = new Uint8Array(this.response);
      var i = uInt8Array.length;
      var binaryString = new Array(i);
      while (i--) {
        binaryString[i] = String.fromCharCode(uInt8Array[i]);
      }
      var data = binaryString.join('');

      var base64 = encode(data);
      // console.log(base64)
      callback(base64);
      // document.getElementById("myImage").src="data:image/png;base64,"+base64;
    }
  };

  xhr.send();
}

function encode(input) {
  // Create Base64 Object
  const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  let str = input;
  let output = '';

  for (
    let block = 0, charCode, i = 0, map = chars;
    str.charAt(i | 0) || ((map = '='), i % 1);
    output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
  ) {
    charCode = str.charCodeAt((i += 3 / 4));

    if (charCode > 0xff) {
      throw new Error(
        '\'btoa\' failed: The string to be encoded contains characters outside of the Latin1 range.',
      );
    }

    block = (block << 8) | charCode;
  }

  return output;
}

export function xmlToJson(xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj['@attributes'] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If just one text node inside
  if (
    xml.hasChildNodes() &&
		xml.childNodes.length === 1 &&
		xml.childNodes[0].nodeType === 3
  ) {
    obj = xml.childNodes[0].nodeValue;
  } else if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == 'undefined') {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == 'undefined') {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

export const modifyXML = (xml) => {
  const posElement = xml.indexOf('<DocumentElement');
  if (posElement !== -1) {
    return xml.slice(posElement).replace('</diffgr:diffgram>', '');
  }
  return [];
};
