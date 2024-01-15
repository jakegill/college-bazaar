import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
	return (
		<>
			<Navbar />
			<MaxWidthWrapper>
				<RegisterForm />
			</MaxWidthWrapper>
		</>
	);
}
