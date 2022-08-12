export function buildUrl (paramName, paramValue) {
    var string = '?';
    
    for (var i = 0; i < paramValue.length; i++) {
      if (i > 0) {
        string += '&';
      }
      string += `${paramName}=${paramValue[i]}`;
    }
    return string;
  }