package com.company.remote;

/**
 * Created by Nabeel on 10/6/2017.
 */
public interface RemoteInterFace {

    Integer MIN_VOLUME = 0;
    Integer MAX_VOLUME = 100;

    Integer MIN_CHANNEL = 0;
    Integer MAX_CHANNEL = 999; // MEAN THE TV HAS

    //
    Boolean powerOnOff();
    Integer volumeUp();
    Integer volumeDown();
    void mute();
    Integer setChannel(Integer channel);
    Integer channelUp(); // Returns new channel number
    Integer channelDown(); // Returns new channel number

}
