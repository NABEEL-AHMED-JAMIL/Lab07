package com.company;

import com.company.remote.RemoteFactory;
import com.company.remote.RemoteInterFace;

public class Main {

    public static void main(String[] args) {
	// write your code here

        RemoteInterFace remote = RemoteFactory.remoteInterFace("TV");
        remote.powerOnOff(); // Switch it on
        for(int i = 0; i<5; i++){
            // Set the next channel up
            // Turn up the sound
            System.out.println("Channel "+remote.channelUp()+" Volume "+remote.volumeUp());
        }
        remote.powerOnOff(); // Switch it on
    }
}
