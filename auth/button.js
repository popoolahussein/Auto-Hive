import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

function Button({ title, buttonStyle, textStyle, onPress, imageSource, imageStyles }) {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            {imageSource && (
                <Image
                    source={imageSource}
                    style={imageStyles}
                />
            )}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
