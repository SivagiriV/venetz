import React, { useEffect, useState } from 'react';
import useIsMobile from '../../utils';
import axios from 'axios';

const ColorSelector = () => {
  const isMobile = useIsMobile();
  const [colorList,setColorList] = useState([])
  const [selectedColor, setSelectedColor] = useState(colorList[0]);
  const colorCode = async () => {
    try {
      const url = "https://admin.venetz.in/api/products";
      const params = { customize: 1, detailed: 1 };
      const headers = {
        Authorization: `Basic MTQ3IzI6dkFwMnQxSlZqYnh1ckVGMEhzaTc2TEtaeWdRQzRx`,
        "Content-type": "application/json",
      };
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      setColorList(
        response?.data?.products[0]?.product_attribute_types[0]
          ?.product_attribute_values
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    colorCode();
  }, []);
  const getImageUrl = (colorName) => {
    const urls = {
      "Light Blue": "https://admin.venetz.in/dynamic/images/product_images/YXU0PZ.jpg",
      "Yellow": "https://admin.venetz.in/dynamic/images/product_images/q8SpyU.jpg",
      "Pink": "https://admin.venetz.in/dynamic/images/product_images/F9yRLc.jpg",
      "Green": "https://admin.venetz.in/dynamic/images/product_images/JdYxsp.jpg",
      "Orange": "https://admin.venetz.in/dynamic/images/product_images/xM94di.jpg",
    };
    return urls[colorName] || urls["Light Blue"];
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      padding: isMobile ? '16px' : '32px',
      gap: isMobile ? '24px' : '48px',
    }}>
      <div>
        {isMobile ? 
        <img
          src={getImageUrl(selectedColor?.attribute_value_text)}
          style={{
            objectFit: 'contain',
          }}
          width={150}
          height={150}
          alt={`${selectedColor?.attribute_value_text} product`}
        /> : 
        <img
        src={getImageUrl(selectedColor?.attribute_value_text)}
        style={{
          objectFit: 'contain',
        }}
        width={350}
        height={350}
        alt={`${selectedColor?.attribute_value_text} product`}
      /> }
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#333333',
          marginBottom: '16px',
        }}>
          Color
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: '16px',
        }}>
          {colorList.map((color, idx) => (
            <div
              key={idx}
              style={{
                width: isMobile ? '45px' : '100px',
                height: isMobile ? '45px' : '100px',
                borderRadius: '4px',
                border: `2px solid ${selectedColor?.attribute_value_color_code === color.attribute_value_color_code ? '#000000' : '#E5E5E5'}`,
                backgroundColor: color.attribute_value_color_code,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor?.attribute_value_color_code === color.attribute_value_color_code && (
                <span style={{
                  color: '#fff',
                  fontSize: isMobile ? '12px' : '24px',
                }}>
                  &#10003;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;

