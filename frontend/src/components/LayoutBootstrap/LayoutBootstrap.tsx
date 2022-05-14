import {NavBar} from "./NavBar";
import {LateralMenu} from "./LateralMenu";
import {Header} from "./Header";

interface Props  {
    children: React.ReactNode;
    title: string;

};
export const LayoutBootstrap = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <LateralMenu></LateralMenu>
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <Header title={props.title}></Header>
                    {props.children}
                </div>


            </main>
        </div>
    );
};



