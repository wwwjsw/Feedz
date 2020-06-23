export default interface IHeader {
   title: string;
   onDrawer?(): void;
   onBack?(): void;
   onFilter?(): void;
   color: string;
}
