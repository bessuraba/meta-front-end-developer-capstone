// Reservation Types
export interface ReservationData {
  date: string;
  time: string;
  occasion: string;
  guests: {
    adults: number;
    children: number;
    pets: number;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sms: boolean;
  note: string;
}

export interface ReservationContextType {
  reservation: ReservationData;
  setReservation: (reservation: ReservationData) => void;
}

// Form Types
export interface FormikProps {
  values: ReservationData;
  errors: Partial<Record<keyof ReservationData, any>>;
  touched: Partial<Record<keyof ReservationData, any>>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (field: string, touched?: boolean) => void;
  setTouched: (touched: Partial<Record<keyof ReservationData, any>>) => void;
  validateForm: () => Promise<any>;
  isValid: boolean;
  isSubmitting: boolean;
}

// Formik Field Props
export interface FormikFieldProps {
  field: {
    name: keyof ReservationData;
    value: any;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
  };
  form: FormikProps;
}

// Generic Component Props
export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export interface OnClickProps {
  onClick: () => void;
}

export interface DataProps {
  data: ReservationData;
}

// Button Props
export interface ButtonProps extends ChildrenProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  [key: string]: any;
}

// Container Props
export interface ContainerProps extends ChildrenProps, ClassNameProps {}

// Form Input Props
export interface InputProps {
  name: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}

// Select Props
export interface SelectProps {
  value: string;
  placeholder: string;
  error: boolean;
  onSelect: (value: string) => void;
}

// Time Item Props
export interface TimeItemProps {
  children: string;
  className?: string;
  value: string;
  error: boolean;
  selected: boolean;
  onClick: (value: string) => void;
}

// Guest Input Props
export interface GuestInputProps {
  error: boolean;
  value: number;
  onChange: (input: Partial<{ adults: number; children: number; pets: number }>) => void;
}

// Guest Count Props
export interface GuestCountProps extends ChildrenProps {
  error: boolean;
  selected: boolean;
}

// Icon Props
export interface IconProps extends ClassNameProps {
  error?: boolean;
  selected?: boolean;
}

// Arrow Props
export interface ArrowProps extends ClassNameProps {
  opened: boolean;
  error?: boolean;
  selected?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface MainProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  children: React.ReactNode;
}

export interface TitleProps {
  children: React.ReactNode;
}

export interface BackProps {
  onClick: () => void;
}

// Step Types
export type ReservationStep = 'reservation' | 'info';

export interface StepReservationProps {
  onSubmit: () => void;
  formik: FormikProps;
}

export interface StepReviewInfoProps {
  formik: FormikProps;
}

// Form Input Types
export interface InputProps {
  name: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}


export interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  rows?: number;
}

// Navigation Types
export interface NavigationItem {
  href: string;
  title: string;
  label: string;
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
}

// Special Item Types
export interface SpecialItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

// Menu Item Types
export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
