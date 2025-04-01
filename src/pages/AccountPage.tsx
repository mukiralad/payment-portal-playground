
import Layout from "@/components/layout/Layout";
import UserAccount from "@/components/microfrontends/UserAccount/UserAccount";

const AccountPage = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <UserAccount />
      </div>
    </Layout>
  );
};

export default AccountPage;
