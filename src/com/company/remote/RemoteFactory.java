package com.company.remote;

import java.util.Random;

import static java.lang.StrictMath.random;

/**
 * Created by Nabeel on 10/6/2017.
 */
public class RemoteFactory {

    private final static String[] TV_REMOTE = { "Sony","Panasonic","Dell","Apple","Sumsange" };
    private final static String[] VCR_REMOTE = {"Sony","Panasonic","Dish_VCR"};

    private Random random = new Random();
    private static Integer chose_tv;
    private static Integer chose_vcr;

    private static RemoteFactory remoteFactory = new RemoteFactory();
    //
    private RemoteFactory(){
        chose_tv = random.nextInt(TV_REMOTE.length);
        chose_vcr = random.nextInt(VCR_REMOTE.length);
    }

    public static RemoteInterFace remoteInterFace(String whichRemote){

        if(whichRemote.equalsIgnoreCase(null)){
            return null;
        }else if(whichRemote.equalsIgnoreCase("TV")){
            return new TvRemote(TV_REMOTE[chose_tv], random() < 0.5 ? 32 : 38);
        }else if(whichRemote.equalsIgnoreCase("VCR")){
            return new VcrRemote(VCR_REMOTE[chose_vcr]);
        }
        return null;
    }
}
