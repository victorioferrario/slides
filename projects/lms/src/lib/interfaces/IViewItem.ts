export  interface IViewItem {
    id: number;
    label: string;
    path: string;
    description: string;
    visible: boolean;
    
    cssStyle?: string;
}