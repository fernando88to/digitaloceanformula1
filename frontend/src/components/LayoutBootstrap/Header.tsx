interface Props {
    title : string;

};
export const Header = (props: Props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4>{props.title}</h4>
            </div>
        </div>
    );
};