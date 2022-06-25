//Diary
export interface DiaryProps {
  id: number;
  date: number;
  title: string;
  content: string;
  emotion: number;
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
