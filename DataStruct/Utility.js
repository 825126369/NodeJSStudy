var GameConst = {
    N_ADS_AWARD_TILI_COUNT:1,
    N_ADS_AWARD_LEVEL_EXP_COUNT:1000,
    N_INIT_PLAYER_TILI:6,
    N_INIT_PLAYER_LEVEL:1,

    N_MIN_HEADICON_ID:1,
    N_MAX_HEADICON_ID:40,

}

var UUIDHelper = {
  deviceUniqueIdentifier:function()
  {
		var uuId = "fake: "
		uuId += "-" + TimeUtility.GetTimeStamp();
		uuId += "-" + RandomUtility.Random(0, Number.MAX_SAFE_INTEGER);
    uuId += "-" + RandomUtility.Random(0, Number.MAX_SAFE_INTEGER);
		return uuId;
  },
}

var RandomUtility = {
  Random:function(nMin, nMax)
  {
    var v = Math.random() * (nMax - nMin + 1) + nMin
    var uIntValue = parseInt(v, 10);
    return uIntValue
  },
}

var TimeUtility = {
  GetTimeStamp:function(newDate)
  {
    if(typeof(newDate) == "undefined")
    {
        //输入是本地时间
      //newDate = new Date("2018-09-01 10:31:59");
      newDate = new Date();
    }
    
    var nTimeStamp = newDate.getTime()
    return nTimeStamp
  },
  
  GetDateTime:function(nTimeStamp)
  {
      // 返回的是UTC 时间
      var localDate = new Date(nTimeStamp);
      // 通过时区偏移差得到本地时间
      var offsetMinutes = localDate.getTimezoneOffset()
      localDate.setMinutes(localDate.getMinutes() - offsetMinutes); 
      return localDate
  },
  
}

var FormulaHelper = {
    GetPlayerShengLv:function(nWinCount, nLostCount)
    {
        var nShengLv = 0;
        var nSumCount = nWinCount + nLostCount;
        if (nSumCount > 0)
        {
            nShengLv = parseInt((nWinCount / nSumCount * 100));
        }
        return nShengLv;
    },
    
    GetPlayerZongHeShiLi:function(nWinCount, nLostCount, nContinueWinCount)
    {
        var nSumCount = nWinCount + nLostCount;
        var nShengLv = this.GetPlayerShengLv(nWinCount, nLostCount);

        var nFenShu = nShengLv * 10 + nContinueWinCount * 100 + nSumCount * 1;
        var nShiLi = parseInt(Math.max(nFenShu, 10))
        return nShiLi;
    }
  }
  
  module.exports = {
    GameConst,
    UUIDHelper,
    RandomUtility,
    TimeUtility,
    FormulaHelper,
 }
 