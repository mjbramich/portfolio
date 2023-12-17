import type { FC } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiFileText } from 'react-icons/fi/index';
import { RxDiscordLogo } from 'react-icons/rx';
import styles from '@css/home.module.css';

const Socials: FC = () => (
	<div className={styles.socials}>
		{[
			{
				aria: 'GitHub',
				icon: FiGithub,
				href: 'https://github.com/mjbramich'
			},
			{
				aria: 'Twitter',
				icon: FiTwitter,
				href: 'https://twitter.com/mjbramich'
			},
			{
				aria: 'Linkedin',
				icon: FiLinkedin,
				href: 'https://linkedin.com/in/mjbramich/'
			},
			{
				aria: 'Discord',
				icon: RxDiscordLogo,
				href: 'https://discord.com/users/759379629148078121'
			},
			{
				aria: 'Resume',
				icon: FiFileText,
				href: 'https://drive.google.com/file/d/13p6X4aarSjfnb19103-HGqCW3WPxS5dV/view?usp=drive_link'
			}
		].map((link) => (
			<a
				href={link.href}
				target='_blank'
				rel='noreferrer'
				className={styles.social}
				key={link.aria}
				aria-label={link.aria}
			>
				<link.icon size={22} />
			</a>
		))}
	</div>
);

export default Socials;
