package com.company.remote;

import static java.lang.Math.max;
import static java.lang.StrictMath.min;

/**
 * Created by Nabeel on 10/6/2017.
 */
public class VcrRemote implements RemoteInterFace{

    private String make = null;
    private Boolean power = false;
    private Integer volume = MIN_VOLUME;
    private Integer channel = MIN_CHANNEL;

    public VcrRemote(String make) {

        this.make = make; // make mean the name of the company
    }

    @Override
    public Boolean powerOnOff() {

        power = !power; // mean the power is on
        System.out.println(make +" " + " power "+ (power ? "on":"off"));
        // by used of short condition
        return power;
    }

    @Override
    public Integer volumeUp() {

        if(!power){
            return 0;
        }else{
            // increment volume
            volume += 1;
            volume = min(volume,MAX_VOLUME);
            return volume;
        }
    }

    @Override
    public Integer volumeDown() {

        if(!power){
            // if the power is off notaing to do
            return 0;
        }else{
            volume -= 1;
            volume = max(volume,MIN_VOLUME);
            return volume;
        }

    }

    @Override
    public void mute() {

        if(!power){
            return ;
            // this give the zero if the power is off
        }else{
            volume = MIN_VOLUME;
        }

    }

    @Override
    public Integer setChannel(Integer channel) {

        if(!power){
            return 0;
        }else if(channel >= MIN_CHANNEL && channel <= MAX_CHANNEL){
            this.channel = channel;
        }
        return channel;

    }

    @Override
    public Integer channelUp() {

        if(!power){
            return 0;
        }else{
            // Wrap channel up to MIN_CHANNEL When MAX_CHANNEL is reached
            channel = channel<MAX_CHANNEL ? ++channel : MIN_CHANNEL;
            return channel;
        }
    }

    @Override
    public Integer channelDown() {

        if(!power){
            return 0;
        }else{

            channel = channel>MIN_CHANNEL ? --channel : MAX_CHANNEL;
            return channel;

        }
    }
}
