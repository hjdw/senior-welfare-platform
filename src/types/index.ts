// 복지시설 타입 정의
export interface Facility {
  id: string;
  name: string;
  type: FacilityType;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  description: string;
  services: Service[];
  rating: number;
  reviewCount: number;
  capacity: number;
  currentOccupancy: number;
  price: PriceInfo;
  images: string[];
  amenities: string[];
  operatingHours: OperatingHours;
  contactInfo: ContactInfo;
  accessibility: AccessibilityInfo;
  createdAt: string;
  updatedAt: string;
}

export type FacilityType = 
  | '요양병원'
  | '요양원'
  | '실버타운'
  | '노인복지관'
  | '노인요양시설'
  | '노인주거복지시설'
  | '노인여가복지시설';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  isAvailable: boolean;
  price?: number;
}

export type ServiceCategory = 
  | '의료서비스'
  | '요양서비스'
  | '재활서비스'
  | '여가서비스'
  | '상담서비스'
  | '운송서비스'
  | '식사서비스';

export interface PriceInfo {
  monthly: number;
  daily?: number;
  additionalServices?: {
    [key: string]: number;
  };
  insuranceCoverage?: boolean;
  discountInfo?: string;
}

export interface OperatingHours {
  weekdays: {
    open: string;
    close: string;
  };
  weekends?: {
    open: string;
    close: string;
  };
  holidays?: {
    open: string;
    close: string;
  };
  is24Hours?: boolean;
}

export interface ContactInfo {
  phone: string;
  fax?: string;
  email?: string;
  website?: string;
  emergencyContact?: string;
}

export interface AccessibilityInfo {
  wheelchairAccessible: boolean;
  elevatorAvailable: boolean;
  rampAvailable: boolean;
  accessibleBathroom: boolean;
  brailleSignage: boolean;
  hearingAidCompatible: boolean;
  largePrintMaterials: boolean;
  assistanceAvailable: boolean;
}

// 검색 및 필터링 타입
export interface SearchFilters {
  location?: string;
  facilityType?: FacilityType[];
  services?: ServiceCategory[];
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  accessibility?: Partial<AccessibilityInfo>;
  availability?: boolean;
}

export interface SearchResult {
  facilities: Facility[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

// 사용자 관련 타입
export interface UserPreferences {
  favoriteFacilities: string[];
  searchHistory: string[];
  accessibilitySettings: AccessibilitySettings;
  language: 'ko' | 'en';
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  reduceMotion: boolean;
  screenReader: boolean;
}

// 지도 관련 타입
export interface MapLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface MapMarker {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  facility: Facility;
}

// 즐겨찾기 및 비교 타입
export interface FavoriteFacility {
  facilityId: string;
  addedAt: string;
  notes?: string;
}

export interface ComparisonItem {
  facilityId: string;
  addedAt: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// 지역 정보 타입
export interface Region {
  code: string;
  name: string;
  parentCode?: string;
  level: 'sido' | 'sigungu' | 'dong';
}

// 리뷰 및 평가 타입
export interface Review {
  id: string;
  facilityId: string;
  userId?: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  helpfulCount: number;
  images?: string[];
}

// 통계 데이터 타입
export interface FacilityStatistics {
  totalFacilities: number;
  facilitiesByType: {
    [key in FacilityType]: number;
  };
  averageRating: number;
  averagePrice: number;
  topRatedFacilities: Facility[];
  recentlyAddedFacilities: Facility[];
} 