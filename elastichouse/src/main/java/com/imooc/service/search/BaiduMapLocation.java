package com.imooc.service.search;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 百度位置信息
 * lon,lat为es中的强制性名字
 * house_index_with_suggest.json
 *     "location": {
 "type": "geo_point"
 }
 * Created by 瓦力.
 */
public class BaiduMapLocation {
    // 经度
    @JsonProperty("lon")
    private double longitude;

    // 纬度
    @JsonProperty("lat")
    private double latitude;

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
}
