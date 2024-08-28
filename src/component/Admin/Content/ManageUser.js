import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from 'react';
import { getAllUser, getUserWithPaginate } from '../../../services/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";


const ManageUser = (props) => {
    const LIMIT_USER = 5;
    const [pageCount, setPageCount] = useState(0);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        // fetchListUser();
        fetchListUsersWithPaginate(1);
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataUpdate(user);
    }


    const resetUpdateData = () => {
        setDataUpdate({})
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add=new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus />Add new User</button>
                </div>
                <div className="table-user-container">
                    {/* <TableUser handleClickBtnUpdate={handleClickBtnUpdate} listUsers={listUsers} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} /> */}
                    <TableUserPaginate handleClickBtnUpdate={handleClickBtnUpdate}
                        listUsers={listUsers} handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                    />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUser={fetchListUser} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} fetchListUser={fetchListUser} resetUpdateData={resetUpdateData} />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} dataUpdate={dataUpdate} fetchListUser={fetchListUser} resetUpdateData={resetUpdateData} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataUpdate={dataUpdate} fetchListUser={fetchListUser} />
            </div>
        </div>
    )
}

export default ManageUser;