import React from "react";
import {Spinners} from "./Spinners";

interface Props {
    children?: React.ReactNode,
    columns: Array<Column>,
    rows?: Array<any>,
    loading: boolean
    itemSelected?: (key: any) => void
}

interface Column {
    field: string,
    headerName: string
}


export const Table = (props: Props) => {

    function showLoading() {
        return <Spinners/>
    }

    function showElementsTable() {
        return <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap5">
            <div className="row">
                <div className="col-sm-12">
                    <table id="example"
                           className="table table-striped data-table dataTable"
                           style={{width: '100%'}} role="grid"
                           aria-describedby="example_info">
                        <thead>
                        <tr role="row">
                            {props.columns.map((item, index) => {
                                return (
                                    <th className="sorting" key={index}>{item.headerName}</th>
                                )
                            })}
                            <th className="sorting"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            // @ts-ignore
                            props.rows.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        {
                                            Object.keys(item)
                                                .filter(key => props.columns.map(column => column.field).includes(key))
                                                .map((key, index) => {
                                                    return (
                                                        <td key={index}>{item[key]}</td>
                                                    )
                                                })
                                        }

                                        <td>
                                            <button className="btn btn-primary"
                                                    onClick={
                                                        // @ts-ignore
                                                        () => props.itemSelected(item)}>
                                                <i className="bi bi-search"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }

    function showTable() {
        return props.loading ? showLoading() : showElementsTable()
    }
    return (
        <div>
            {showTable()}
        </div>
    );
};