export { TroveContext, default } from './create';

/* Global typing for Borrow*/

export type TroveProps = {
    loan: string;
    addLoan: (name: string) => void;
    children?: JSX.Element;
};
