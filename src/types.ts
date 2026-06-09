export interface LampState {
  kelvin: number; // 2700K - 6500K
  brightness: number; // 0 - 100
  soundSensitivity: number; // 0 - 100
  isAmbientAuto: boolean;
  activeMode: 'focus' | 'eyeprotect' | 'soothing' | 'relax' | 'manual';
  colorHex: string; // RGB representation
}

export interface CircuitComponent {
  id: string;
  name: string;
  pin: string;
  role: string;
  spec: string;
  status: 'Idle' | 'Scanning' | 'Active' | 'Transmitting' | 'Calibrating';
  voltage: string;
  protocol: string;
}

export interface EngineeringMilestone {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  tolerance: string;
  date: string;
  description: string;
  technicalDetails: string;
}

export interface AssessorReview {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export type TimelinePhaseId = 'tinyml' | 'ieee' | 'zigbee' | 'posture';

export interface TimelinePhase {
  id: TimelinePhaseId;
  title: string;
  subtitle: string;
  timeline: string;
  status: 'In Development' | 'Scheduled' | 'Researching';
  deliverables: string[];
  confidence: number;
}
