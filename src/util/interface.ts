//Common
export interface LoginTogglerType {
  loginToggler: () => void;
}

//User
export interface UserProps {
  name?: string | number;
}

//TodoList
export interface TodoList {
  id: number;
  checked: boolean;
  todo: string;
}

export interface CheckFormProps {
  id: number;
  todo: string;
  checked: boolean;
}

//Diary
export interface DiaryProps {
  id: number;
  date: number;
  title: string;
  content: string;
  emotion: number;
}

export interface DiaryEditorProps {
  boxTitle: string;
  isEdit?: boolean;
  originData?: DiaryProps;
}

export interface EmotionItemProps {
  emotionId: number;
  emotionDesc: string;
  emotionHandler: (value: number) => void;
  isSelected: boolean;
}

//WishList
export interface WishListProps {
  id: number;
  date: number;
  icon: string;
  name: string;
  price: string;
  desc: string;
}

export interface WishProps {
  originData?: WishListProps;
  isEdit?: boolean;
  modalHandler: () => void;
}

//Common
export interface ModalProps {
  children: JSX.Element;
  modalHandler: () => void;
}

//FilteredList
export interface ControlProps {
  value: string;
  onChange: (value: string) => void;
  optionList: any[];
}

export interface FilterProps {
  type: string;
  list: any[];
}
