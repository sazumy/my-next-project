import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        ご質問、ご相談は下記フォームよりお問合せください。
        <br />
        内容確認後、担当者より通常３営業日以内にご連絡いたします。
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
