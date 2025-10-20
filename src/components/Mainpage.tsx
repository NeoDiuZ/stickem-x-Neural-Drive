'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Utensils, Users, Droplets, Sun, Moon, WifiOff, HelpCircle, Brain, Plus, X, Globe, Heart, Home, Star, Car, Phone, Music, Coffee, Bed, Sun as SunIcon, Zap, Camera, Gift, Clock, MapPin, Thermometer, Mic, MessageCircle, Play, Bus, Bike, Plane, Key, Building2, Stethoscope, Users2, Briefcase, GraduationCap, Dumbbell, Pill, Frown, Smile, CloudRain, AlertTriangle, Activity, GamepadIcon, Monitor, Youtube } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
  soundFile: string;
}

// Language types
type Language = 'en' | 'ms' | 'ta' | 'zh';

// Translation interface
interface Translations {
  en: {
    appTitle: string;
    connected: string;
    disconnected: string;
    connecting: string;
    menuActive: string;
    connect: string;
    disconnect: string;
    mainTitle: string;
    subtitle: string;
    addCard: string;
    food: string;
    help: string;
    outing: string;
    television: string;
    washroom: string;
    water: string;
    lights: string;
    youtube: string;
    addCommunicationCard: string;
    cardName: string;
    chooseIcon: string;
    cancel: string;
    addCardButton: string;
    pleaseConnect: string;
    enterLabel: string;
    bluetoothNotSupported: string;
    connectionFailed: string;
    language: string;
    connectAccessories: string;
    accessoriesConnected: string;
    connectingAccessories: string;
    noLightsDeviceConnected: string;
  };
  ms: {
    appTitle: string;
    connected: string;
    disconnected: string;
    connecting: string;
    menuActive: string;
    connect: string;
    disconnect: string;
    mainTitle: string;
    subtitle: string;
    addCard: string;
    food: string;
    help: string;
    outing: string;
    television: string;
    washroom: string;
    water: string;
    lights: string;
    youtube: string;
    addCommunicationCard: string;
    cardName: string;
    chooseIcon: string;
    cancel: string;
    addCardButton: string;
    pleaseConnect: string;
    enterLabel: string;
    bluetoothNotSupported: string;
    connectionFailed: string;
    language: string;
    connectAccessories: string;
    accessoriesConnected: string;
    connectingAccessories: string;
    noLightsDeviceConnected: string;
  };
  ta: {
    appTitle: string;
    connected: string;
    disconnected: string;
    connecting: string;
    menuActive: string;
    connect: string;
    disconnect: string;
    mainTitle: string;
    subtitle: string;
    addCard: string;
    food: string;
    help: string;
    outing: string;
    television: string;
    washroom: string;
    water: string;
    lights: string;
    youtube: string;
    addCommunicationCard: string;
    cardName: string;
    chooseIcon: string;
    cancel: string;
    addCardButton: string;
    pleaseConnect: string;
    enterLabel: string;
    bluetoothNotSupported: string;
    connectionFailed: string;
    language: string;
    connectAccessories: string;
    accessoriesConnected: string;
    connectingAccessories: string;
    noLightsDeviceConnected: string;
  };
  zh: {
    appTitle: string;
    connected: string;
    disconnected: string;
    connecting: string;
    menuActive: string;
    connect: string;
    disconnect: string;
    mainTitle: string;
    subtitle: string;
    addCard: string;
    food: string;
    help: string;
    outing: string;
    television: string;
    washroom: string;
    water: string;
    lights: string;
    youtube: string;
    addCommunicationCard: string;
    cardName: string;
    chooseIcon: string;
    cancel: string;
    addCardButton: string;
    pleaseConnect: string;
    enterLabel: string;
    bluetoothNotSupported: string;
    connectionFailed: string;
    language: string;
    connectAccessories: string;
    accessoriesConnected: string;
    connectingAccessories: string;
    noLightsDeviceConnected: string;
  };
}

// Translation data
const translations: Translations = {
  en: {
    appTitle: "Neural Assist",
    connected: "Connected",
    disconnected: "Disconnected",
    connecting: "Connecting...",
    menuActive: "Menu Active",
    connect: "Connect",
    disconnect: "Disconnect",
    mainTitle: "Neural Communication Interface",
    subtitle: "Express your needs through neural signals with instant audio feedback",
    addCard: "Add Communication Card",
    food: "Food",
    help: "Help",
    outing: "Outing",
    television: "Television",
    washroom: "Washroom",
    water: "Water",
    lights: "Lights",
    youtube: "YouTube",
    addCommunicationCard: "Add Communication Card",
    cardName: "Card name...",
    chooseIcon: "Choose an icon:",
    cancel: "Cancel",
    addCardButton: "Add Card",
    pleaseConnect: "Please connect to NeuralHelp first!",
    enterLabel: "Please enter a label for the card",
    bluetoothNotSupported: "Web Bluetooth not supported",
    connectionFailed: "Connection failed",
    language: "Language",
    connectAccessories: "Connect Accessories",
    accessoriesConnected: "Accessories Connected",
    connectingAccessories: "Connecting Accessories...",
    noLightsDeviceConnected: "No light device connected"
  },
  ms: {
    appTitle: "Neural Assist",
    connected: "Disambung",
    disconnected: "Terputus",
    connecting: "Menyambung...",
    menuActive: "Menu Aktif",
    connect: "Sambung",
    disconnect: "Putus",
    mainTitle: "Antara Muka Komunikasi Neural",
    subtitle: "Luahkan keperluan anda melalui isyarat neural dengan maklum balas audio segera",
    addCard: "Tambah Kad Komunikasi",
    food: "Makanan",
    help: "Bantuan",
    outing: "Keluar",
    television: "Televisyen",
    washroom: "Bilik Air",
    water: "Air",
    lights: "Lampu",
    youtube: "YouTube",
    addCommunicationCard: "Tambah Kad Komunikasi",
    cardName: "Nama kad...",
    chooseIcon: "Pilih ikon:",
    cancel: "Batal",
    addCardButton: "Tambah Kad",
    pleaseConnect: "Sila sambung ke NeuralHelp terlebih dahulu!",
    enterLabel: "Sila masukkan label untuk kad",
    bluetoothNotSupported: "Web Bluetooth tidak disokong",
    connectionFailed: "Sambungan gagal",
    language: "Bahasa",
    connectAccessories: "Sambung Aksesori",
    accessoriesConnected: "Aksesori Disambung",
    connectingAccessories: "Menyambung Aksesori...",
    noLightsDeviceConnected: "Tiada peranti lampu disambung"
  },
  ta: {
    appTitle: "Neural Assist",
    connected: "இணைக்கப்பட்டது",
    disconnected: "தொடர்பு துண்டிக்கப்பட்டது",
    connecting: "இணைக்கிறது...",
    menuActive: "மெனு செயலில்",
    connect: "இணை",
    disconnect: "துண்டி",
    mainTitle: "நரம்பு தொடர்பு இடைமுகம்",
    subtitle: "நரம்பு சமிக்ஞைகள் மூலம் உங்கள் தேவைகளை உடனடி ஆடியோ பின்னூட்டத்துடன் வெளிப்படுத்துங்கள்",
    addCard: "தொடர்பு அட்டை சேர்",
    food: "உணவு",
    help: "உதவி",
    outing: "வெளியே செல்",
    television: "தொலைக்காட்சி",
    washroom: "கழிப்பறை",
    water: "தண்ணீர்",
    lights: "விளக்குகள்",
    youtube: "யூடியூப்",
    addCommunicationCard: "தொடர்பு அட்டை சேர்",
    cardName: "அட்டையின் பெயர்...",
    chooseIcon: "ஒரு ஐகான் தேர்வு:",
    cancel: "ரத்து",
    addCardButton: "அட்டை சேர்",
    pleaseConnect: "முதலில் NeuralHelp உடன் இணைக்கவும்!",
    enterLabel: "அட்டைக்கு ஒரு லேபிள் உள்ளிடவும்",
    bluetoothNotSupported: "வெப் புளூடூத் ஆதரிக்கப்படவில்லை",
    connectionFailed: "இணைப்பு தோல்வி",
    language: "மொழி",
    connectAccessories: "இணைப்புகளை இணைக்க",
    accessoriesConnected: "இணைப்புகள் இணைக்கப்பட்டன",
    connectingAccessories: "இணைப்புகளை இணைக்கிறது...",
    noLightsDeviceConnected: "விளக்கு சாதனம் இணைக்கப்படவில்லை"
  },
  zh: {
    appTitle: "神经驱动",
    connected: "已连接",
    disconnected: "已断开",
    connecting: "连接中...",
    menuActive: "菜单激活",
    connect: "连接",
    disconnect: "断开",
    mainTitle: "神经通信界面",
    subtitle: "通过神经信号表达您的需求，获得即时音频反馈",
    addCard: "添加通信卡",
    food: "食物",
    help: "帮助",
    outing: "外出",
    television: "电视",
    washroom: "洗手间",
    water: "水",
    lights: "灯光",
    youtube: "YouTube",
    addCommunicationCard: "添加通信卡",
    cardName: "卡片名称...",
    chooseIcon: "选择图标:",
    cancel: "取消",
    addCardButton: "添加卡片",
    pleaseConnect: "请先连接到NeuralHelp!",
    enterLabel: "请为卡片输入标签",
    bluetoothNotSupported: "不支持Web蓝牙",
    connectionFailed: "连接失败",
    language: "语言",
    connectAccessories: "连接配件",
    accessoriesConnected: "配件已连接",
    connectingAccessories: "正在连接配件...",
    noLightsDeviceConnected: "未连接灯光设备"
  }
};

// Language options
const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'ms' as Language, name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'ta' as Language, name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' }
];

// Define types for Bluetooth objects
interface BluetoothDevice extends EventTarget {
  gatt?: BluetoothRemoteGATTServer;
}
declare global {
  interface Navigator {
    bluetooth: {
      requestDevice(options: {
        filters: Array<{ name?: string; services?: string[] }>;
        optionalServices?: string[];
      }): Promise<BluetoothDevice>;
    };
  }
}
interface BluetoothRemoteGATTServer {
  connect(): Promise<BluetoothRemoteGATTServer>;
  disconnect(): void;
  connected: boolean;
  getPrimaryService(service: string): Promise<BluetoothRemoteGATTService>;
}

interface BluetoothRemoteGATTService {
  getCharacteristic(characteristic: string): Promise<BluetoothRemoteGATTCharacteristic>;
}

interface BluetoothRemoteGATTCharacteristic extends EventTarget {
  startNotifications(): Promise<void>;
  stopNotifications(): Promise<void>;
  readValue(): Promise<DataView>;
  value?: DataView;
  writeValue?(value: BufferSource): Promise<void>;
}

const CommunicationInterface: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('neuralDriveLanguage') as Language;
    if (savedLanguage && languageOptions.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('neuralDriveLanguage', currentLanguage);
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [activeSelection, setActiveSelection] = useState<string | null>(null);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [showAddCard, setShowAddCard] = useState(false);
  const connectedDeviceRef = useRef<BluetoothDevice | null>(null);
  const [pendingActionOptionId, setPendingActionOptionId] = useState<string | null>(null);
  const handleNotificationsRef = useRef<((event: Event) => void) | undefined>(undefined);
  const notificationWrapperRef = useRef<((event: Event) => void) | undefined>(undefined);
  // YouTube state
  const [showYouTubeView, setShowYouTubeView] = useState(false);
  const [ytVideos] = useState<Array<{ id: string; title: string; thumb: string }>>([]);
  const [ytLoading] = useState(false);
  const [ytError] = useState<string | null>(null);
  const [ytModal, setYtModal] = useState<{ open: boolean; id: string | null; title: string }>(() => ({ open: false, id: null, title: '' }));
  const [selectedYtIndex, setSelectedYtIndex] = useState<number | null>(null);
  const [activeYtIndex, setActiveYtIndex] = useState<number | null>(null);
  // 1 = Keep Watching, 2 = Close
  const [selectedYtModalIndex, setSelectedYtModalIndex] = useState<number | null>(1);
  const [activeYtModalIndex, setActiveYtModalIndex] = useState<number | null>(null);
  // YouTube API key and query removed as YouTube view opener is currently unused
  // Lights BLE
  const LIGHTS_SERVICE_UUID = '19b10000-e8f2-537e-4f6c-d104768a1214';
  const LIGHTS_CHAR_UUID = '19b10001-e8f2-537e-4f6c-d104768a1214';
  const connectedLightsDeviceRef = useRef<BluetoothDevice | null>(null);
  const lightsCharacteristicRef = useRef<BluetoothRemoteGATTCharacteristic | null>(null);
  const [isLightsConnected, setIsLightsConnected] = useState(false);
  const [isConnectingAccessories, setIsConnectingAccessories] = useState(false);
  const [showLightsMessage] = useState(false);

  // Stick 'Em Robot will use the existing lights connection system

  // Get current translations
  const t = translations[currentLanguage];

  // Function to format YouTube video titles
  const formatVideoTitle = (title: string) => {
    // Remove common prefixes and suffixes that make titles too long
    let formatted = title
      .replace(/^(Music Therapy|Relaxing Music|Relaxing Therapy Music|Relaxing Sleeping Music|Soothing Meditation Music|Stress Relieving|Calming Music|Peaceful Relaxing Music|Stress Relieving & Calming Music)\s*[-|:]\s*/i, '')
      .replace(/\s*[-|:]\s*(for Therapy|for Dementia|for Alzheimer's|for Memory Loss|for Parkinson's|for Stress Relief|for Anxiety|for Health|and Immune System|Patients|Psychotherapy|Disease|4K|UltraHD|Video|Music|Film)\s*$/i, '')
      .replace(/\s*[-|:]\s*(4k Video UltraHD|4K Video|UltraHD|4K|Video|Music|Film)\s*$/i, '')
      .trim();

    // If still too long, truncate and add ellipsis
    if (formatted.length > 60) {
      formatted = formatted.substring(0, 57) + '...';
    }

    return formatted;
  };

  // Default options - robot control cards
  const getDefaultOptions = useCallback((): Option[] => [
    {
      id: 'forward',
      label: 'Forward',
      icon: <Car size={40} strokeWidth={1.5} />,
      color: 'bg-green-500',
      lightColor: 'bg-green-400',
      soundFile: 'select.mp3'
    },
    {
      id: 'stop',
      label: 'Stop',
      icon: <Zap size={40} strokeWidth={1.5} />,
      color: 'bg-red-500',
      lightColor: 'bg-red-400',
      soundFile: 'select.mp3'
    },
    {
      id: 'backward',
      label: 'Backward',
      icon: <Car size={40} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-400',
      soundFile: 'select.mp3'
    },
    {
      id: 'forwardLeft',
      label: 'Forward Left',
      icon: <Car size={40} strokeWidth={1.5} style={{ transform: 'rotate(-45deg)' }} />,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-400',
      soundFile: 'select.mp3'
    },
    {
      id: 'forwardRight',
      label: 'Forward Right',
      icon: <Car size={40} strokeWidth={1.5} style={{ transform: 'rotate(45deg)' }} />,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-400',
      soundFile: 'select.mp3'
    }
  ], []);

  // Dynamic options state
  const [options, setOptions] = useState<Option[]>([]);

  // Update options when language changes
  useEffect(() => {
    const defaultOptions = getDefaultOptions();
    setOptions(prev => {
      // Update default cards with new translations, keep custom cards
      const customCards = prev.filter(option => option.id.startsWith('custom-'));
      const newOptions = [...defaultOptions, ...customCards];
      console.log('🔄 Options updated:', newOptions.length, 'total cards');
      return newOptions;
    });
  }, [getDefaultOptions]);

  // Debug: Track options changes
  useEffect(() => {
    console.log('📋 Options array changed:', options.map(o => `${o.id}:${o.label}`));
  }, [options]);

  // Debug: Track menu state changes
  useEffect(() => {
    console.log('🎮 Menu state changed:', { menuActive, currentMenuIndex, activeSelection });
  }, [menuActive, currentMenuIndex, activeSelection]);

  // Available icons for new cards
  const availableIcons = [
    // Basic needs
    { name: 'Food', icon: <Utensils size={40} strokeWidth={1.5} /> },
    { name: 'Water', icon: <Droplets size={40} strokeWidth={1.5} /> },
    { name: 'Coffee', icon: <Coffee size={40} strokeWidth={1.5} /> },
    { name: 'Help', icon: <HelpCircle size={40} strokeWidth={1.5} /> },
    
    // People & Social
    { name: 'People', icon: <Users size={40} strokeWidth={1.5} /> },
    { name: 'Family', icon: <Users2 size={40} strokeWidth={1.5} /> },
    { name: 'Doctor', icon: <Stethoscope size={40} strokeWidth={1.5} /> },
    { name: 'Phone', icon: <Phone size={40} strokeWidth={1.5} /> },
    { name: 'Message', icon: <MessageCircle size={40} strokeWidth={1.5} /> },
    { name: 'Speak', icon: <Mic size={40} strokeWidth={1.5} /> },
    
    // Places
    { name: 'Home', icon: <Home size={40} strokeWidth={1.5} /> },
    { name: 'Hospital', icon: <Building2 size={40} strokeWidth={1.5} /> },
    { name: 'Location', icon: <MapPin size={40} strokeWidth={1.5} /> },
    
    // Transportation
    { name: 'Car', icon: <Car size={40} strokeWidth={1.5} /> },
    { name: 'Plane', icon: <Plane size={40} strokeWidth={1.5} /> },
    { name: 'Bus', icon: <Bus size={40} strokeWidth={1.5} /> },
    { name: 'Bike', icon: <Bike size={40} strokeWidth={1.5} /> },
    
    // Health & Emotions
    { name: 'Medicine', icon: <Pill size={40} strokeWidth={1.5} /> },
    { name: 'Pain', icon: <Frown size={40} strokeWidth={1.5} /> },
    { name: 'Happy', icon: <Smile size={40} strokeWidth={1.5} /> },
    { name: 'Sad', icon: <Frown size={40} strokeWidth={1.5} /> },
    { name: 'Tired', icon: <Activity size={40} strokeWidth={1.5} /> },
    
    // Activities
    { name: 'Sleep', icon: <Bed size={40} strokeWidth={1.5} /> },
    { name: 'Work', icon: <Briefcase size={40} strokeWidth={1.5} /> },
    { name: 'Study', icon: <GraduationCap size={40} strokeWidth={1.5} /> },
    { name: 'Exercise', icon: <Dumbbell size={40} strokeWidth={1.5} /> },
    { name: 'Music', icon: <Music size={40} strokeWidth={1.5} /> },
    { name: 'Game', icon: <GamepadIcon size={40} strokeWidth={1.5} /> },
    { name: 'Play', icon: <Play size={40} strokeWidth={1.5} /> },
    { name: 'Television', icon: <Monitor size={40} strokeWidth={1.5} /> },
    
    // Objects & Tools
    { name: 'Clock', icon: <Clock size={40} strokeWidth={1.5} /> },
    { name: 'Key', icon: <Key size={40} strokeWidth={1.5} /> },
    { name: 'Camera', icon: <Camera size={40} strokeWidth={1.5} /> },
    { name: 'Gift', icon: <Gift size={40} strokeWidth={1.5} /> },
    
    // Weather & Environment
    { name: 'Sun', icon: <SunIcon size={40} strokeWidth={1.5} /> },
    { name: 'Cold', icon: <CloudRain size={40} strokeWidth={1.5} /> },
    { name: 'Rain', icon: <CloudRain size={40} strokeWidth={1.5} /> },
    { name: 'Temperature', icon: <Thermometer size={40} strokeWidth={1.5} /> },
    
    // Generic/Important
    { name: 'Heart', icon: <Heart size={40} strokeWidth={1.5} /> },
    { name: 'Star', icon: <Star size={40} strokeWidth={1.5} /> },
    { name: 'Emergency', icon: <Zap size={40} strokeWidth={1.5} /> },
    { name: 'Important', icon: <AlertTriangle size={40} strokeWidth={1.5} /> }
  ];

  const playSound = useCallback((soundFile: string) => {
    try {
      const audio = new Audio(`./sounds/${soundFile}`);
      audio.volume = 0.7;
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    } catch (error) {
      console.log('Audio creation failed:', error);
    }
  }, []);

  const handleNotifications = useCallback((event: Event) => {
    const target = event.target as BluetoothRemoteGATTCharacteristic;
    const value = target.value;
    if (!value) return;

    const data = new Uint8Array(value.buffer);
    
    // Force re-read current state to avoid stale closure
    const currentShowYT = showYouTubeView;
    const currentModalOpen = ytModal.open;
    
    console.log(`🔔 BLE Packet:`, {
      raw: Array.from(data),
      length: data.length,
      char0: data[0],
      char1: data[1] || 'N/A',
      decoded: data.length === 2 ? `'${String.fromCharCode(data[0])}'${data[1]}` : `single:${data[0]}`,
      ytModal: currentModalOpen,
      showYouTubeView: currentShowYT,
      currentLayer: currentModalOpen ? 'VIDEO_MODAL' : currentShowYT ? 'YOUTUBE_LIST' : 'MAIN_MENU'
    });

    // HARD BLOCK: If any overlay is open, ignore ALL packets to prevent main menu interference
    if (currentModalOpen || currentShowYT) {
      // Only handle packets specifically for the active overlay
      if (currentModalOpen) {
        console.log(`🎬 VIDEO MODAL: Processing packet`);
        // Video modal handler
        if (data.length === 2 && data[0] === 'S'.charCodeAt(0)) {
          console.log(`🎬 VIDEO MODAL: 'S' received, toggling selection`);
          setSelectedYtModalIndex(prev => {
            const next = prev === 1 ? 2 : 1;
            console.log(`🎬 VIDEO MODAL: Selection changed from ${prev} to ${next}`);
            return next;
          });
          return;
        }
        if (data.length === 2 && data[0] === 'A'.charCodeAt(0)) {
          console.log(`🎬 VIDEO MODAL: 'A' received, selectedYtModalIndex=${selectedYtModalIndex}`);
          if (selectedYtModalIndex === 2) {
            console.log(`🎬 VIDEO MODAL: Closing video (Close selected)`);
            playSound('select.mp3');
            setYtModal({ open: false, id: null, title: '' });
          } else {
            console.log(`🎬 VIDEO MODAL: Keep watching (button 1 selected)`);
            playSound('select.mp3');
          }
          return;
        }
        // Ignore all other packets while video modal is open
        console.log(`🎬 VIDEO MODAL: Ignoring packet ${data.length}:${data[0]}`);
        return;
      }
      
      if (currentShowYT) {
        console.log(`📺 YOUTUBE LIST: Processing packet`);
        // YouTube list handler
        if (data.length === 2 && data[0] === 'S'.charCodeAt(0)) {
          const newIndex = data[1];
          const total = ytVideos.length + 1;
          console.log(`📺 YOUTUBE LIST: 'S' received, index=${newIndex}, total=${total}`);
          if (newIndex > 0 && newIndex <= total) {
            setSelectedYtIndex(newIndex);
            console.log(`📺 YOUTUBE LIST: Selected index ${newIndex}`);
          } else {
            console.log(`📺 YOUTUBE LIST: Index ${newIndex} out of range (1-${total})`);
          }
          return;
        }
        if (data.length === 2 && data[0] === 'A'.charCodeAt(0)) {
          const selectedIndex = data[1];
          const total = ytVideos.length + 1;
          console.log(`📺 YOUTUBE LIST: 'A' received, index=${selectedIndex}, total=${total}`);
          if (selectedIndex > 0 && selectedIndex <= ytVideos.length) {
            const v = ytVideos[selectedIndex - 1];
            console.log(`📺 YOUTUBE LIST: Opening video: ${v.title}`);
            playSound('select.mp3');
            setActiveYtIndex(selectedIndex);
            setYtModal({ open: true, id: v.id, title: v.title });
            setTimeout(() => setActiveYtIndex(null), 3000);
          } else if (selectedIndex === total) {
            console.log(`📺 YOUTUBE LIST: Closing YouTube list`);
            playSound('select.mp3');
            setShowYouTubeView(false);
          } else {
            console.log(`📺 YOUTUBE LIST: Index ${selectedIndex} out of range`);
          }
          return;
        }
        // Ignore all other packets while YouTube list is open
        console.log(`📺 YOUTUBE LIST: Ignoring packet ${data.length}:${data[0]}`);
        return;
      }
      
      // If we reach here, there's a bug - return to be safe
      console.log(`❌ BUG: Overlay open but no handler matched`);
      return;
    }

    // Main menu handler (only when no overlays are open)
    console.log(`🏠 MAIN MENU: Processing packet, options.length=${options.length}`);
    if (data.length === 1) {
      if (data[0] === 0) {
        console.log(`🏠 MAIN MENU: Menu start (0)`);
        setMenuActive(true);
        setCurrentMenuIndex(1);
        setActiveSelection(null);
      } else if (data[0] === 127) {
        console.log(`🏠 MAIN MENU: Menu stop (127)`);
        setMenuActive(false);
        setCurrentMenuIndex(0);
        setActiveSelection(null);
      }
      return;
    }
    if (data.length === 2) {
      if (data[0] === 'S'.charCodeAt(0)) {
        const newIndex = data[1];
        console.log(`🏠 MAIN MENU: 'S' received, index=${newIndex}, options.length=${options.length}`);
        if (newIndex > 0 && newIndex <= options.length) {
          console.log(`🏠 MAIN MENU: Valid index, highlighting card: ${options[newIndex - 1]?.label || 'unknown'}`);
          setMenuActive(true);
          setCurrentMenuIndex(newIndex);
          setActiveSelection(null);
          // Play select sound when highlighting a new card
          playSound('select.mp3');
          console.log(`🏠 MAIN MENU: State updated - menuActive=true, currentMenuIndex=${newIndex}`);
        } else {
          console.log(`🏠 MAIN MENU: Invalid index ${newIndex}, range is 1-${options.length}`);
        }
        return;
      }
      if (data[0] === 'A'.charCodeAt(0)) {
        const selectedIndex = data[1];
        console.log(`🏠 MAIN MENU: 'A' received, index=${selectedIndex}, options.length=${options.length}`);
        if (selectedIndex > 0 && selectedIndex <= options.length) {
          const optionId = options[selectedIndex - 1].id;
          console.log(`🏠 MAIN MENU: Activating option: ${optionId} (${options[selectedIndex - 1]?.label})`);
          setSelectedOption(optionId);
          setActiveSelection(optionId);
          playSound(options[selectedIndex - 1].soundFile);
          setPendingActionOptionId(optionId);
          setTimeout(() => {
            setActiveSelection(null);
          }, 3000);
        } else {
          console.log(`🏠 MAIN MENU: Index ${selectedIndex} out of range (1-${options.length})`);
        }
        return;
      }
    }
    console.log(`🏠 MAIN MENU: Unhandled packet`);
  }, [options, playSound, showYouTubeView, ytVideos, selectedYtModalIndex, ytModal.open]); // Add all state dependencies

  // Update the ref whenever the callback changes
  useEffect(() => {
    handleNotificationsRef.current = handleNotifications;
    console.log('🔄 handleNotifications callback updated, options.length:', options.length);
  }, [handleNotifications, options.length]);

  useEffect(() => {
    // DISABLED: All menu highlighting is now handled directly in the BLE handler
    // This prevents main menu from responding when overlays are open
  }, [currentMenuIndex, menuActive, options, playSound, showYouTubeView, ytVideos.length, ytModal.open]);

  const handleDisconnection = useCallback(() => {
    setIsConnected(false);
    setMenuActive(false);
    setCurrentMenuIndex(0);
  }, []);

  const connectToDevice = useCallback(async () => {
    try {
      setIsConnecting(true);
      setConnectionError(null);

      if (!navigator.bluetooth || !navigator.bluetooth.requestDevice) {
        throw new Error(t.bluetoothNotSupported);
      }

      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: 'ESP32C6_EEG' }],
        optionalServices: ['6910123a-eb0d-4c35-9a60-bebe1dcb549d']
      }) as BluetoothDevice;

      connectedDeviceRef.current = device;

      if (!device.gatt) {
        throw new Error('Bluetooth device does not support GATT');
      }

      device.addEventListener('gattserverdisconnected', handleDisconnection);

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('6910123a-eb0d-4c35-9a60-bebe1dcb549d');
      const characteristic = await service.getCharacteristic('5f4f1107-7fc1-43b2-a540-0aa1a9f1ce78');

      await characteristic.startNotifications();
      // Use a wrapper to always call the latest callback
      const notificationWrapper = (event: Event) => {
        if (handleNotificationsRef.current) {
          handleNotificationsRef.current(event);
        }
      };
      notificationWrapperRef.current = notificationWrapper;
      characteristic.addEventListener('characteristicvaluechanged', notificationWrapper);

      setIsConnected(true);
      setIsConnecting(false);

      return true;
    } catch (error) {
      console.error('Connection failed:', error);
      setIsConnecting(false);
      setIsConnected(false);
      setConnectionError(error instanceof Error ? error.message : t.connectionFailed);
      return false;
    }
  }, [handleDisconnection, t]);

  // Lights connect/disconnect and write helpers
  const handleLightsDisconnection = useCallback(() => {
    setIsLightsConnected(false);
    lightsCharacteristicRef.current = null;
  }, []);

  const connectToLightsDevice = useCallback(async (): Promise<boolean> => {
    try {
      if (!navigator.bluetooth || !navigator.bluetooth.requestDevice) {
        throw new Error(t.bluetoothNotSupported);
      }

      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: [LIGHTS_SERVICE_UUID] }],
        optionalServices: [LIGHTS_SERVICE_UUID]
      }) as BluetoothDevice;

      connectedLightsDeviceRef.current = device;
      device.addEventListener('gattserverdisconnected', handleLightsDisconnection);

      if (!device.gatt) {
        throw new Error('Bluetooth device does not support GATT');
      }

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(LIGHTS_SERVICE_UUID);
      const characteristic = await service.getCharacteristic(LIGHTS_CHAR_UUID);
      lightsCharacteristicRef.current = characteristic;

      // Try reading initial value to validate link (best-effort)
      try { await characteristic.readValue(); } catch {}

      setIsLightsConnected(true);
      return true;
    } catch (error) {
      console.error('Lights connection failed:', error);
      setIsLightsConnected(false);
      lightsCharacteristicRef.current = null;
      return false;
    }
  }, [LIGHTS_SERVICE_UUID, LIGHTS_CHAR_UUID, handleLightsDisconnection, t]);

  // writeLightsByte removed (unused)

  const connectAccessories = useCallback(async () => {
    setIsConnectingAccessories(true);
    try {
      const success = await connectToLightsDevice();
      if (success) {
        console.log('Accessories connected successfully');
      }
    } catch (error) {
      console.error('Failed to connect accessories:', error);
    } finally {
      setIsConnectingAccessories(false);
    }
  }, [connectToLightsDevice]);

  // Send command to Stick 'Em robot using the existing lights connection
  const sendStickEmCommand = useCallback(async (command: string) => {
    const ch = lightsCharacteristicRef.current;
    if (!ch || typeof ch.writeValue !== 'function') {
      console.log('Stick Em robot not connected (via accessories)');
      return false;
    }
    
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(command);
      
      await ch.writeValue(data);
      console.log('Sent to Stick Em robot:', command);
      return true;
    } catch (e) {
      console.error('Stick Em command send failed:', e);
      return false;
    }
  }, []);

  // toggleLights removed (unused)

  // YouTube helpers
  // openYouTubeView removed (unused)

  // When a video modal opens, clear main-menu state to prevent background iteration
  useEffect(() => {
    if (ytModal.open) {
      setSelectedOption(null);
      setActiveSelection(null);
      setCurrentMenuIndex(0);
      // Default selection to Keep Watching on open
      setSelectedYtModalIndex(1);
    }
  }, [ytModal.open]);

  // Global guard: while any overlay is open, force main menu inactive and index cleared
  useEffect(() => {
    console.log('🛡️ GLOBAL GUARD EFFECT:', { showYouTubeView, ytModal: ytModal.open });
    if (showYouTubeView || ytModal.open) {
      console.log('🛡️ Setting menuActive=false, currentMenuIndex=0');
      setMenuActive(false);
      setCurrentMenuIndex(0);
    }
  }, [showYouTubeView, ytModal.open]);

  // Debug: Track showYouTubeView state changes
  useEffect(() => {
    console.log('📺 showYouTubeView state changed to:', showYouTubeView);
  }, [showYouTubeView]);

  const openYTModal = useCallback((id: string, title: string) => {
    setYtModal({ open: true, id, title });
  }, []);

  const closeYTModal = useCallback(() => {
    setYtModal({ open: false, id: null, title: '' });
  }, []);

  const disconnectDevice = useCallback(async () => {
    try {
      if (!connectedDeviceRef.current) {
        return;
      }

      const server = connectedDeviceRef.current.gatt;
      if (!server) {
        return;
      }

      if (!server.connected) {
        connectedDeviceRef.current = null;
        setIsConnected(false);
        return;
      }

      const service = await server.getPrimaryService("6910123a-eb0d-4c35-9a60-bebe1dcb549d");
      const dataChar = await service.getCharacteristic("5f4f1107-7fc1-43b2-a540-0aa1a9f1ce78");

      await dataChar.stopNotifications();
      if (notificationWrapperRef.current) {
        dataChar.removeEventListener("characteristicvaluechanged", notificationWrapperRef.current);
      }

      server.disconnect();
    } catch (error) {
      console.error("Error during disconnection:", error);
    } finally {
      setIsConnected(false);
      setIsConnecting(false);
      setMenuActive(false);
      setCurrentMenuIndex(0);
    }
  }, []);

  const toggleConnection = async () => {
    if (isConnected) {
      disconnectDevice();
    } else {
      await connectToDevice();
    }
  };

  const handleOptionClick = (option: Option) => {
    // For robot control commands, only check if robot is connected (not neural drive)
    if (['forward', 'stop', 'backward', 'forwardLeft', 'forwardRight'].includes(option.id)) {
      if (!isLightsConnected) {
        alert('Please connect to robot first!');
        return;
      }
    } else {
      // For non-robot commands, require neural drive connection
      if (!isConnected) {
        alert(t.pleaseConnect);
        return;
      }
    }

    setSelectedOption(selectedOption === option.id ? null : option.id);
    playSound(option.soundFile);
    
    // Handle robot control commands
    if (option.id === 'forward') {
      // Send forward command: 'mv:2000:1000:2000:1000:-:-:-:-:-,'
      console.log('Sending Forward command');
      sendStickEmCommand('mv:2000:1000:2000:1000:-:-:-:-:-,');
    } else if (option.id === 'stop') {
      // Send stop command: 'stopAll,'
      console.log('Sending Stop command');
      sendStickEmCommand('stopAll,');
    } else if (option.id === 'backward') {
      // Send backward command: 'mv:1000:2000:1000:2000:-:-:-:-:-,'
      console.log('Sending Backward command');
      sendStickEmCommand('mv:1000:2000:1000:2000:-:-:-:-:-,');
    } else if (option.id === 'forwardLeft') {
      // Send forward left command: 'mv:1500:1000:1500:1000:-:-:-:-:-,'
      console.log('Sending Forward Left command');
      sendStickEmCommand('mv:1500:1000:1500:1000:-:-:-:-:-,');
    } else if (option.id === 'forwardRight') {
      // Send forward right command: 'mv:2000:1500:2000:1500:-:-:-:-:-,'
      console.log('Sending Forward Right command');
      sendStickEmCommand('mv:2000:1500:2000:1500:-:-:-:-:-,');
    }
  };

  // Run side-effects for neural activations
  useEffect(() => {
    if (!pendingActionOptionId) return;
    // Hard block: ignore any main-menu activations while an overlay is active
    if (ytModal.open || showYouTubeView) {
      setPendingActionOptionId(null);
      return;
    }
    
    // Handle robot control commands
    if (pendingActionOptionId === 'forward') {
      // Send forward command: 'mv:2000:1000:2000:1000:-:-:-:-:-,'
      console.log('Neural activation: Sending Forward command');
      sendStickEmCommand('mv:2000:1000:2000:1000:-:-:-:-:-,');
    } else if (pendingActionOptionId === 'stop') {
      // Send stop command: 'stopAll,'
      console.log('Neural activation: Sending Stop command');
      sendStickEmCommand('stopAll,');
    } else if (pendingActionOptionId === 'backward') {
      // Send backward command: 'mv:1000:2000:1000:2000:-:-:-:-:-,'
      console.log('Neural activation: Sending Backward command');
      sendStickEmCommand('mv:1000:2000:1000:2000:-:-:-:-:-,');
    } else if (pendingActionOptionId === 'forwardLeft') {
      // Send forward left command: 'mv:1500:1000:1500:1000:-:-:-:-:-,'
      console.log('Neural activation: Sending Forward Left command');
      sendStickEmCommand('mv:1500:1000:1500:1000:-:-:-:-:-,');
    } else if (pendingActionOptionId === 'forwardRight') {
      // Send forward right command: 'mv:2000:1500:2000:1500:-:-:-:-:-,'
      console.log('Neural activation: Sending Forward Right command');
      sendStickEmCommand('mv:2000:1500:2000:1500:-:-:-:-:-,');
    }
    
    setPendingActionOptionId(null);
  }, [pendingActionOptionId, ytModal.open, showYouTubeView, sendStickEmCommand]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Language selection handler
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setShowLanguageDropdown(false);
  };

  // Add new card functionality
  const addNewCard = (newCard: Omit<Option, 'id'>) => {
    const id = `custom-${Date.now()}`;
    const cardWithId: Option = { ...newCard, id };
    setOptions(prev => {
      const newOptions = [...prev, cardWithId];
      console.log('🆕 Added new card:', cardWithId.label, 'Total options now:', newOptions.length);
      return newOptions;
    });
    setShowAddCard(false);
  };

  // Remove card functionality
  const removeCard = (cardId: string) => {
    setOptions(prev => prev.filter(option => option.id !== cardId));
    // Reset selection if the removed card was selected
    if (selectedOption === cardId) {
      setSelectedOption(null);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Header */}
      <header className={`border-b backdrop-blur-sm sticky top-0 z-50 ${isDarkMode ? 'border-gray-700 bg-slate-900/80' : 'border-gray-200 bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.appTitle}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Connection Status */}
              <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg border ${
                isConnected 
                  ? 'border-green-400 bg-green-50 text-green-700' 
                  : isDarkMode 
                    ? 'border-red-400 bg-red-950 text-red-400'
                    : 'border-red-400 bg-red-50 text-red-700'
              }`}>
                <div className="relative">
                  {isConnected ? (
                    <WifiOff size={16} className="text-green-500" />
                  ) : isConnecting ? (
                    <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <WifiOff size={16} className="text-red-400" />
                  )}
                </div>
                <span className="font-medium text-sm">
                  {isConnected ? t.connected : isConnecting ? t.connecting : t.disconnected}
                </span>
                {menuActive && (
                  <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                    {t.menuActive}
                  </span>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all ${
                    isDarkMode 
                      ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                  }`}
                >
                  <Globe size={16} />
                  <span className="text-sm">{languageOptions.find(lang => lang.code === currentLanguage)?.flag}</span>
                  <span className="text-xs">▼</span>
                </button>

                {showLanguageDropdown && (
                  <div className={`absolute top-full right-0 mt-2 min-w-48 rounded-lg border shadow-lg z-50 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600' 
                      : 'bg-white border-gray-200'
                  }`}>
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:transition-all ${
                          currentLanguage === lang.code
                            ? isDarkMode 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-blue-50 text-blue-700'
                            : isDarkMode 
                              ? 'hover:bg-gray-700 text-gray-200' 
                              : 'hover:bg-gray-50 text-gray-900'
                        } ${lang === languageOptions[0] ? 'rounded-t-lg' : ''} ${lang === languageOptions[languageOptions.length - 1] ? 'rounded-b-lg' : ''}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Connect Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={toggleConnection}
                  disabled={isConnecting}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isConnected
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } ${isConnecting ? 'opacity-75' : ''}`}
                >
                  {isConnecting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">↻</span>
                      {t.connecting}
                    </span>
                  ) : isConnected ? (
                    t.disconnect
                  ) : (
                    t.connect
                  )}
                </button>

                <button
                  onClick={connectAccessories}
                  disabled={isConnectingAccessories}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isLightsConnected
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  } ${isConnectingAccessories ? 'opacity-75' : ''}`}
                >
                  {isConnectingAccessories ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">↻</span>
                      Connecting Robot...
                    </span>
                  ) : isLightsConnected ? (
                    'Robot Connected'
                  ) : (
                    'Connect Robot'
                  )}
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Click outside to close language dropdown */}
      {showLanguageDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowLanguageDropdown(false)}
        />
      )}

      {/* Main Interface */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.mainTitle}
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {connectionError && (
          <div className="mb-6 text-center">
            <div className="inline-block bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
              {connectionError}
            </div>
          </div>
        )}

        {showLightsMessage && (
          <div className="mb-6 text-center">
            <div className={`inline-block px-4 py-2 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-orange-950 border border-orange-700 text-orange-300' 
                : 'bg-orange-50 border border-orange-200 text-orange-700'
            }`}>
              {t.noLightsDeviceConnected}
            </div>
          </div>
        )}

        {/* Add Card Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowAddCard(true)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-dashed transition-all ${
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900'
            }`}
          >
            <Plus size={20} />
            <span>{t.addCard}</span>
          </button>
        </div>


        {/* Communication Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {options.map((option, index) => {
            const isCurrentMenuOption = menuActive && !showYouTubeView && !ytModal.open && currentMenuIndex === index + 1;
            const isCustomCard = option.id.startsWith('custom-');
            const isRobotCard = ['forward', 'stop', 'backward', 'forwardLeft', 'forwardRight'].includes(option.id);
            // Purple for S mode iteration, green for A mode activation
            const isIterating = isCurrentMenuOption && !activeSelection;
            const isActivated = activeSelection === option.id;
            
            // Determine if card should be disabled
            const isDisabled = isRobotCard ? !isLightsConnected : !isConnected;
            
            // Debug logging for visual state
            if (isCurrentMenuOption) {
              console.log(`🎯 Card ${index + 1} (${option.label}): isCurrentMenuOption=${isCurrentMenuOption}, menuActive=${menuActive}, currentMenuIndex=${currentMenuIndex}, isIterating=${isIterating}`);
            }

            return (
              <div
                key={option.id}
                className={`
                  relative group cursor-pointer transition-all duration-300 transform
                  ${isDarkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-gray-200'}
                  hover:scale-105 hover:shadow-lg rounded-xl p-6 border-2
                  ${isIterating ? 'ring-4 ring-purple-400/50' : ''}
                  ${isActivated ? 'border-green-400 bg-green-50 scale-105' : ''}
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {/* Remove button for custom cards */}
                {isCustomCard && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCard(option.id);
                    }}
                    className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <X size={14} />
                  </button>
                )}

                <div onClick={() => handleOptionClick(option)} className="flex flex-col items-center space-y-4">
                  <div className={`
                    p-4 rounded-lg transition-all duration-300 group-hover:scale-110
                    ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}
                    ${isIterating ? 'bg-purple-100' : ''}
                    ${isActivated ? 'bg-green-100' : ''}
                  `}>
                    <div className={`transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-700'
                    } ${isIterating ? 'text-purple-600' : ''} ${isActivated ? 'text-green-600' : ''}`}>
                      {option.icon}
                    </div>
                  </div>

                  <h3 className={`text-lg font-semibold text-center transition-all duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } ${isIterating ? 'text-purple-600' : ''} ${isActivated ? 'text-green-600' : ''}`}>
                    {option.label}
                    {isIterating && <span className="ml-2 text-xs bg-purple-500 text-white px-2 py-1 rounded">HIGHLIGHTED</span>}
                  </h3>

                  {(isIterating || isActivated) && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* YouTube View Overlay */}
      {showYouTubeView && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-full max-w-4xl rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} shadow-2xl overflow-hidden`}> 
            <div className="flex items-center px-4 py-3 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}">
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>YouTube</h3>
            </div>

            <div className="p-4">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                Showing first 5 results for <span className="font-medium">“old people relaxation videos”</span>
              </p>

              {ytError && (
                <div className={`mb-3 inline-block ${isDarkMode ? 'bg-red-950 text-red-300 border-red-700' : 'bg-red-50 text-red-700 border-red-200'} border px-3 py-2 rounded`}>{ytError}</div>
              )}

              {ytLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ytVideos.map((v, idx) => {
                    const isSelected = selectedYtIndex === idx + 1;
                    const isActive = activeYtIndex === idx + 1;
                    // Purple for S mode iteration, green for A mode activation
                    const isIterating = isSelected && !isActive;
                    const isActivated = isActive;
                    return (
                      <button
                        key={v.id}
                        onClick={() => openYTModal(v.id, v.title)}
                        className={`text-left rounded-lg border transition-all duration-300 transform relative p-1 ${
                          isDarkMode ? 'border-slate-700 hover:border-slate-500' : 'border-gray-200 hover:border-gray-300'
                        } ${isIterating ? 'ring-4 ring-purple-400/50' : ''} ${isActivated ? 'border-green-400 bg-green-50 scale-105' : ''}`}
                      >
                        <div className="overflow-hidden rounded-lg">
                          <Image src={v.thumb} alt={`Thumbnail: ${v.title}`} width={640} height={360} className="w-full aspect-video object-cover" unoptimized />
                        </div>
                        <div className={`p-3 transition-all duration-300 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        } ${isIterating ? 'text-purple-600' : ''} ${isActivated ? 'text-green-600' : ''}`}>
                          <h4 className="font-medium text-sm leading-tight line-clamp-3">
                            {formatVideoTitle(v.title)}
                          </h4>
                        </div>
                        {(isIterating || isActivated) && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse z-10">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                  {/* Close tile as the last selectable item */}
                  <button
                    onClick={() => setShowYouTubeView(false)}
                    className={`flex items-center justify-center rounded-lg border-2 p-6 font-semibold transition-all duration-300 transform relative ${
                      isDarkMode ? 'border-slate-700 hover:border-slate-500 text-white' : 'border-gray-200 hover:border-gray-300 text-gray-900'
                    } ${selectedYtIndex === ytVideos.length + 1 ? 'ring-4 ring-purple-400/50' : ''}`}
                    aria-label="Close YouTube"
                  >
                    <span className={`transition-all duration-300 ${
                      selectedYtIndex === ytVideos.length + 1 ? 'text-purple-600' : ''
                    }`}>
                      Close
                    </span>
                    {selectedYtIndex === ytVideos.length + 1 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                  {ytVideos.length === 0 && !ytError && (
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} py-12 text-center`}>No videos found.</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Modal Player */}
          {ytModal.open && ytModal.id && (
            <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
              <div className={`relative w-full max-w-5xl ${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden border-2 ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                {/* Card Header */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Youtube size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>YouTube Player</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Neural Control Active</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    Neural Mode
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative">
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      title={ytModal.title}
                      width="100%"
                      height="100%"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      src={`https://www.youtube-nocookie.com/embed/${ytModal.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                    />
                  </div>
                  {/* Video Overlay Info */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className={`px-3 py-1 rounded-lg backdrop-blur-sm ${isDarkMode ? 'bg-black/50 text-white' : 'bg-white/90 text-gray-900'}`}>
                      <span className="text-sm font-medium">Now Playing</span>
                    </div>
                    <div className={`px-3 py-1 rounded-lg backdrop-blur-sm ${isDarkMode ? 'bg-red-600/90 text-white' : 'bg-red-600 text-white'}`}>
                      <span className="text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Video Title */}
                <div className={`px-6 py-4 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold text-lg leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {formatVideoTitle(ytModal.title)}
                  </h4>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Use neural controls to navigate
                  </p>
                </div>

                {/* Action Buttons Card */}
                <div className={`px-6 py-4 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedYtModalIndex(1);
                        setActiveYtModalIndex(1);
                        setTimeout(() => setActiveYtModalIndex(null), 1200);
                      }}
                      className={`group relative rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'border-slate-600 hover:border-slate-400 bg-slate-800 hover:bg-slate-700 text-white' 
                          : 'border-gray-200 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-900'
                      } ${selectedYtModalIndex === 1 ? 'ring-4 ring-purple-400/60' : ''} ${activeYtModalIndex === 1 ? 'border-green-400 bg-green-50 scale-105' : ''}`}
                    >
                      <div className={`flex items-center justify-center space-x-2 transition-all duration-300 ${
                        selectedYtModalIndex === 1 ? 'text-purple-600' : ''} ${activeYtModalIndex === 1 ? 'text-green-600' : ''}`}>
                        <Play size={16} className={activeYtModalIndex === 1 ? 'text-green-600' : 'text-green-600'} />
                        <span className="text-sm">Keep Watching</span>
                      </div>
                      {(selectedYtModalIndex === 1 || activeYtModalIndex === 1) && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse z-10">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </button>
                    <button
                      onClick={closeYTModal}
                      className={`group relative rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode 
                          ? 'border-slate-600 hover:border-slate-400 bg-slate-800 hover:bg-slate-700 text-white' 
                          : 'border-gray-200 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-900'
                      } ${selectedYtModalIndex === 2 ? 'ring-4 ring-purple-400/60' : ''} ${activeYtModalIndex === 2 ? 'border-green-400 bg-green-50 scale-105' : ''}`}
                    >
                      <div className={`flex items-center justify-center space-x-2 transition-all duration-300 ${
                        selectedYtModalIndex === 2 ? 'text-purple-600' : ''} ${activeYtModalIndex === 2 ? 'text-green-600' : ''}`}>
                        <X size={16} className={activeYtModalIndex === 2 ? 'text-green-600' : 'text-red-600'} />
                        <span className="text-sm">Close Video</span>
                      </div>
                      {(selectedYtModalIndex === 2 || activeYtModalIndex === 2) && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse z-10">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Add Card Modal */}
      {showAddCard && (
        <AddCardModal
          isDarkMode={isDarkMode}
          availableIcons={availableIcons}
          onSave={addNewCard}
          onCancel={() => setShowAddCard(false)}
          translations={t}
        />
      )}
    </div>
  );
};

// Add Card Modal Component
interface AddCardModalProps {
  isDarkMode: boolean;
  availableIcons: Array<{ name: string; icon: React.ReactNode }>;
  onSave: (card: Omit<Option, 'id'>) => void;
  onCancel: () => void;
  translations: Translations['en'];
}

const AddCardModal: React.FC<AddCardModalProps> = ({
  isDarkMode,
  availableIcons,
  onSave,
  onCancel,
  translations: t
}) => {
  const [label, setLabel] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(availableIcons[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Categorize icons
  const iconCategories = {
    all: { name: 'All', icons: availableIcons },
    basic: { 
      name: 'Basic Needs', 
      icons: availableIcons.filter(icon => 
        ['Food', 'Water', 'Coffee', 'Help'].includes(icon.name)
      )
    },
    people: { 
      name: 'People & Social', 
      icons: availableIcons.filter(icon => 
        ['People', 'Family', 'Doctor', 'Phone', 'Message', 'Speak'].includes(icon.name)
      )
    },
    places: { 
      name: 'Places', 
      icons: availableIcons.filter(icon => 
        ['Home', 'Hospital', 'Location'].includes(icon.name)
      )
    },
    transport: { 
      name: 'Transport', 
      icons: availableIcons.filter(icon => 
        ['Car', 'Plane', 'Bus', 'Bike'].includes(icon.name)
      )
    },
    health: { 
      name: 'Health & Emotions', 
      icons: availableIcons.filter(icon => 
        ['Medicine', 'Pain', 'Happy', 'Sad', 'Tired'].includes(icon.name)
      )
    },
    activities: { 
      name: 'Activities', 
      icons: availableIcons.filter(icon => 
        ['Sleep', 'Work', 'Study', 'Exercise', 'Music', 'Game', 'Play', 'Television'].includes(icon.name)
      )
    },
    objects: { 
      name: 'Objects & Tools', 
      icons: availableIcons.filter(icon => 
        ['Clock', 'Key', 'Camera', 'Gift'].includes(icon.name)
      )
    },
    weather: { 
      name: 'Weather & Environment', 
      icons: availableIcons.filter(icon => 
        ['Sun', 'Cold', 'Rain', 'Temperature'].includes(icon.name)
      )
    },
    important: { 
      name: 'Important', 
      icons: availableIcons.filter(icon => 
        ['Heart', 'Star', 'Emergency', 'Important'].includes(icon.name)
      )
    }
  };

  type CategoryKey = keyof typeof iconCategories;

  // Filter icons based on search and category
  const getFilteredIcons = () => {
    let icons = iconCategories[selectedCategory as CategoryKey]?.icons || availableIcons;
    
    if (searchTerm) {
      icons = icons.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return icons;
  };

  const filteredIcons = getFilteredIcons();

  // Helper function to safely render icons with appropriate sizing
  const renderIconWithSize = (icon: React.ReactNode, size: number) => {
    const element = icon as React.ReactElement;
    
    // For Lucide icons, try to clone with size prop
    try {
      return React.cloneElement(element, { size } as Record<string, unknown>);
    } catch {
      // Fallback: return original element if cloning fails
      return element;
    }
  };

  const handleSave = () => {
    if (!label.trim()) {
      alert(t.enterLabel);
      return;
    }

    onSave({
      label: label.trim(),
      icon: selectedIcon.icon,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-400',
      soundFile: 'select.mp3'
    });
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-sm`}>
      <div className={`${isDarkMode ? 'bg-slate-800 text-white border-slate-600' : 'bg-white text-gray-900 border-gray-200'} rounded-xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl border-2 shadow-xl max-h-[90vh] flex flex-col`}>
        <h2 className="text-lg font-bold mb-4 text-center flex-shrink-0">{t.addCommunicationCard}</h2>
        
        {/* Label Input */}
        <div className="mb-6 flex-shrink-0">
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className={`w-full px-3 py-2 sm:py-3 border rounded-lg text-center text-base sm:text-lg ${
              isDarkMode 
                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder={t.cardName}
          />
        </div>

        {/* Selected Icon Preview */}
        <div className="mb-6 flex-shrink-0">
          <p className="text-sm text-center mb-3 opacity-70">Selected Icon:</p>
          <div className="flex justify-center">
            <div className={`p-4 sm:p-6 rounded-xl border-2 border-blue-500 ${
              isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
            }`}>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center">
                  {renderIconWithSize(selectedIcon.icon, 40)}
                </div>
                <span className="text-sm font-medium text-blue-600">{selectedIcon.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex-shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder="Search icons..."
          />
        </div>

        {/* Category Tabs */}
        <div className="mb-4 flex-shrink-0">
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {Object.entries(iconCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-3 py-2 rounded-lg text-xs transition-all whitespace-nowrap ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.icons.length})
              </button>
            ))}
          </div>
        </div>

        {/* Icon Selection */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <p className="text-sm text-center mb-3 opacity-70 flex-shrink-0">
            {filteredIcons.length} icons in {iconCategories[selectedCategory as CategoryKey]?.name || 'All'}
          </p>
          
          {/* Icon grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 max-h-64 overflow-y-auto p-2 border rounded-lg bg-opacity-50" style={{
            backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 250, 252, 0.5)'
          }}>
            {filteredIcons.map((iconOption, index) => (
              <button
                key={index}
                onClick={() => setSelectedIcon(iconOption)}
                className={`p-2 sm:p-3 rounded-lg border-2 transition-all hover:scale-110 group relative ${
                  selectedIcon.name === iconOption.name
                    ? 'border-blue-500 bg-blue-50 scale-105 shadow-lg'
                    : isDarkMode
                      ? 'border-slate-600 hover:border-slate-400 hover:bg-slate-700'
                      : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
                title={iconOption.name}
              >
                <div className="flex items-center justify-center">
                  {renderIconWithSize(iconOption.icon, 24)}
                </div>
                
                {/* Icon name tooltip on hover */}
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 ${
                  isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
                }`}>
                  {iconOption.name}
                </div>
              </button>
            ))}
          </div>
          
          {filteredIcons.length === 0 && (
            <div className="text-center py-8 opacity-60">
              <p>No icons found matching &quot;{searchTerm}&quot;</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:underline text-sm mt-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 flex-shrink-0">
          <button
            onClick={onCancel}
            className={`flex-1 px-4 py-2 rounded-lg transition-all ${
              isDarkMode 
                ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t.cancel}
          </button>
          <button
            onClick={handleSave}
            disabled={!label.trim()}
            className={`flex-1 px-4 py-2 rounded-lg transition-all ${
              !label.trim()
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {t.addCardButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationInterface;