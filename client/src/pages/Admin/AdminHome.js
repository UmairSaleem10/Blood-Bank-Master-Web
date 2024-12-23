import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            A blood bank management system is a crucial tool for managing blood
            donations, tracking inventory, and ensuring the safety and
            availability of blood products. By using a blood bank management
            system, blood banks can streamline their operations, reduce errors,
            and improve efficiency. The system can help blood banks manage donor
            information, schedule appointments, track donations, and monitor
            inventory levels in real-time. It can also provide valuable insights
            and reports to help blood banks make informed decisions and optimize
            their operations. Additionally, a blood bank management system can
            help blood banks comply with regulatory requirements and ensure the
            safety and quality of their blood products. Overall, a blood bank
            management system is an essential tool for any blood bank looking to
            improve their operations, ensure the safety and availability of
            blood products, and ultimately save lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
