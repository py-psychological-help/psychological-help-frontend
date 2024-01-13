import React from "react";
import style from './AccountDocumentsPage.module.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import Documents from "../../components/Documents/Documents";

const AccountDocumentsPage = () => {

	return (
		<div className={style.body}>
			<Sidebar/>
			<Documents/>
		</div>
	)
}

export default AccountDocumentsPage
