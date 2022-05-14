interface Props  {
    title: string;

};
export const Card = (props: Props) => {
    return (
        <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white h-100">
                <div className="card-body py-5">{props.title}</div>
                <div className="card-footer d-flex">
                    View Details
                    <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
                </div>
            </div>
        </div>
    );
};