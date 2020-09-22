import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const ImageButton = ({
    buttonStyle,    
    imageStyle,
    textStyle,
    imageSource
}) => (
    <TouchableOpacity style={buttonStyle}>            
            <Image
            source={imageSource}
            style={imageStyle}
            />
            <Text style={textStyle}>
                WALK IN SERVICES
            </Text>
        </TouchableOpacity>
);

export { ImageButton };
