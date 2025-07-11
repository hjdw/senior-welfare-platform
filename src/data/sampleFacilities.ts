import { Facility } from '../types';

export const sampleFacilities: Facility[] = [
  {
    id: '1',
    name: '서울요양병원',
    type: '요양병원',
    address: '서울특별시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    latitude: 37.5665,
    longitude: 126.9780,
    description: '전문적인 의료 서비스와 요양 서비스를 제공하는 요양병원입니다.',
    services: [
      {
        id: '1',
        name: '의료진료',
        description: '내과, 신경과 전문의 진료',
        category: '의료서비스',
        isAvailable: true
      },
      {
        id: '2',
        name: '재활치료',
        description: '물리치료, 작업치료',
        category: '재활서비스',
        isAvailable: true
      }
    ],
    rating: 4.5,
    reviewCount: 128,
    capacity: 100,
    currentOccupancy: 85,
    price: {
      monthly: 1500000,
      daily: 50000,
      insuranceCoverage: true
    },
    images: ['/images/facility1.jpg'],
    amenities: ['엘리베이터', '휠체어 접근', '주차장'],
    operatingHours: {
      weekdays: { open: '09:00', close: '18:00' },
      weekends: { open: '09:00', close: '17:00' },
      is24Hours: false
    },
    contactInfo: {
      phone: '02-1234-5678',
      email: 'info@seoul-hospital.com',
      website: 'https://seoul-hospital.com'
    },
    accessibility: {
      wheelchairAccessible: true,
      elevatorAvailable: true,
      rampAvailable: true,
      accessibleBathroom: true,
      brailleSignage: false,
      hearingAidCompatible: true,
      largePrintMaterials: true,
      assistanceAvailable: true
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: '강남실버타운',
    type: '실버타운',
    address: '서울특별시 강남구 역삼동 456',
    phone: '02-2345-6789',
    latitude: 37.5645,
    longitude: 126.9760,
    description: '고급스러운 시설과 다양한 여가 활동을 제공하는 실버타운입니다.',
    services: [
      {
        id: '3',
        name: '여가활동',
        description: '골프, 수영, 독서 등 다양한 여가 활동',
        category: '여가서비스',
        isAvailable: true
      },
      {
        id: '4',
        name: '상담서비스',
        description: '전문 상담사와의 정기 상담',
        category: '상담서비스',
        isAvailable: true
      }
    ],
    rating: 4.8,
    reviewCount: 95,
    capacity: 200,
    currentOccupancy: 180,
    price: {
      monthly: 2500000,
      daily: 80000,
      insuranceCoverage: false
    },
    images: ['/images/facility2.jpg'],
    amenities: ['골프장', '수영장', '도서관', '카페'],
    operatingHours: {
      weekdays: { open: '06:00', close: '22:00' },
      weekends: { open: '07:00', close: '21:00' },
      is24Hours: false
    },
    contactInfo: {
      phone: '02-2345-6789',
      email: 'info@gangnam-silver.com',
      website: 'https://gangnam-silver.com'
    },
    accessibility: {
      wheelchairAccessible: true,
      elevatorAvailable: true,
      rampAvailable: true,
      accessibleBathroom: true,
      brailleSignage: true,
      hearingAidCompatible: true,
      largePrintMaterials: true,
      assistanceAvailable: true
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: '서울노인복지관',
    type: '노인복지관',
    address: '서울특별시 강남구 삼성동 789',
    phone: '02-3456-7890',
    latitude: 37.5685,
    longitude: 126.9800,
    description: '지역사회 노인들을 위한 다양한 복지 서비스를 제공합니다.',
    services: [
      {
        id: '5',
        name: '식사서비스',
        description: '영양사가 관리하는 건강한 식사',
        category: '식사서비스',
        isAvailable: true
      },
      {
        id: '6',
        name: '운송서비스',
        description: '복지관 이용을 위한 무료 운송',
        category: '운송서비스',
        isAvailable: true
      }
    ],
    rating: 4.2,
    reviewCount: 156,
    capacity: 150,
    currentOccupancy: 120,
    price: {
      monthly: 500000,
      daily: 15000,
      insuranceCoverage: true
    },
    images: ['/images/facility3.jpg'],
    amenities: ['식당', '운동실', '강의실', '휴게실'],
    operatingHours: {
      weekdays: { open: '08:00', close: '20:00' },
      weekends: { open: '09:00', close: '18:00' },
      is24Hours: false
    },
    contactInfo: {
      phone: '02-3456-7890',
      email: 'info@seoul-welfare.org',
      website: 'https://seoul-welfare.org'
    },
    accessibility: {
      wheelchairAccessible: true,
      elevatorAvailable: true,
      rampAvailable: true,
      accessibleBathroom: true,
      brailleSignage: true,
      hearingAidCompatible: true,
      largePrintMaterials: true,
      assistanceAvailable: true
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]; 