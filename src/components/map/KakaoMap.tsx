import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Facility } from '../../types';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
`;

interface KakaoMapProps {
  facilities: Facility[];
  center?: { lat: number; lng: number };
  onMarkerClick?: (facility: Facility) => void;
}

export const KakaoMap: React.FC<KakaoMapProps> = ({ 
  facilities, 
  center = { lat: 37.5665, lng: 126.9780 }, // 서울 시청 기본 위치
  onMarkerClick 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markers = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current || !window.kakao) return;

    // 카카오 맵 초기화
    const options = {
      center: new window.kakao.maps.LatLng(center.lat, center.lng),
      level: 8
    };

    mapInstance.current = new window.kakao.maps.Map(mapRef.current, options);
  }, [center]);

  useEffect(() => {
    if (!mapInstance.current || !facilities.length) return;

    // 기존 마커 제거
    markers.current.forEach(marker => marker.setMap(null));
    markers.current = [];

    // 새로운 마커 추가
    facilities.forEach(facility => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(facility.latitude, facility.longitude),
        map: mapInstance.current
      });

      // 마커 클릭 이벤트
      if (onMarkerClick) {
        window.kakao.maps.event.addListener(marker, 'click', () => {
          onMarkerClick(facility);
        });
      }

      // 정보창 생성
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `
          <div style="padding: 10px; min-width: 200px;">
            <h3 style="margin: 0 0 5px 0; font-size: 16px; color: #333;">${facility.name}</h3>
            <p style="margin: 0 0 5px 0; font-size: 14px; color: #666;">${facility.type}</p>
            <p style="margin: 0; font-size: 12px; color: #999;">${facility.address}</p>
            <div style="margin-top: 8px;">
              <span style="color: #FF6F00; font-weight: bold;">★ ${facility.rating}</span>
              <span style="margin-left: 10px; color: #666;">(${facility.reviewCount}개 리뷰)</span>
            </div>
          </div>
        `
      });

      // 마커 호버 시 정보창 표시
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        infowindow.open(mapInstance.current, marker);
      });

      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.close();
      });

      markers.current.push(marker);
    });

    // 모든 마커가 보이도록 지도 범위 조정
    if (facilities.length > 1) {
      const bounds = new window.kakao.maps.LatLngBounds();
      facilities.forEach(facility => {
        bounds.extend(new window.kakao.maps.LatLng(facility.latitude, facility.longitude));
      });
      mapInstance.current.setBounds(bounds);
    }
  }, [facilities, onMarkerClick]);

  return <MapContainer ref={mapRef} />;
}; 