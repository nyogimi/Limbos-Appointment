import SignUpFormContainer from "../components/SignUpFormContainer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <img className="ellipse-icon4" alt="" src="/ellipse4.svg" />
      <div className="ellipse-wrapper2">
        <img className="ellipse-icon5" alt="" src="/ellipse5.svg" />
      </div>
      <div className="h31">Welcome to Limbos Dental Clinic</div>
      <SignUpFormContainer />
    </div>
  );
};

export default SignUpPage;
