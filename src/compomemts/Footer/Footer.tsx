import SocialNav from '../SocialNav/SocialNav'
import styles from './footer.module.scss'

function Footer(){
    return (
      <footer className={styles.footer}>
        <div className={'container ' + styles.container}>
            <div className={styles.txt}>
                <span>&copy;2023 zak cnaan</span>
                <span>I stand with Israel</span>
            </div>
            <SocialNav from="footer" />
        </div>
      </footer>
    )
}

export default Footer