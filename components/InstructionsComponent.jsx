import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					First 3<span>FNAF GAMES</span>
				</h1>
				<p>
					These Are All{" "}
					<span>UNBLOCKED</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://fnaf1.netlify.app"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>FNAF 1</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://fnaf2.netlify.app"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>FNAF 2</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://fnaf3.netlify.app"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>FNAF 3</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://craftmine.netlify.app"
							target={"_blank"}
						>
							CLick Here For Craftmine
						</a>
					</div>
					<div>
						<a
							href="https://slopegame.netlify.app"
							target={"_blank"}
						>
							Click Here For Slope
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
