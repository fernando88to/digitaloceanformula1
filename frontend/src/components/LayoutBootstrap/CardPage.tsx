interface Props {
    title: string;
    children: React.ReactNode;
};
export const CardPage = (props: Props) => {
    return (


        <div className="col-md-12 mb-3">
            <div className="card">
                <div className="card-header">
                    <span><i className="bi bi-table me-2"></i></span> {props.title}
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};