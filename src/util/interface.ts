//Common
export interface LoginTogglerType {
  loginToggler: () => void;
}

export interface SideBarProps {
  active?: string;
  sidebarHandler?: () => void;
}

export interface ModalProps {
  children: JSX.Element;
  modalHandler: () => void;
}

export interface BasicBoxProps {
  boxTitle?: string;
  boxContent: JSX.Element;
  padding?: string;
}

export interface BasicButtonProps {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
}

//FilteredList
type optionListType = { value: string; name: string };

export interface ControlProps {
  value: string;
  onChange: (value: string) => void;
  optionList: optionListType[];
}

export interface FilterProps {
  type: string;
  list: DiaryProps[] | WishListProps[];
}

//User
export interface UserProps {
  name?: string | number;
}

//TodoList
export interface TodoListProps {
  id: number;
  checked: boolean;
  todo: string;
}

export type TodoProgress = { todoProgress: string };

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

export type EmotionType = { emotion: number };

export type ParamsType = { id: string };

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
