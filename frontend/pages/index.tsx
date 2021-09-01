import Head from 'next/head';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Paper, Typography } from '@material-ui/core';
export default function Home() {
	return (
		<div>
			<Head>
				<title>TJournay</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
			</Head>
			<Header />
			<div>
				<div className="leftSide"></div>
				<div className="content">
					<Paper elevation={0} className="p-20">
						<Typography variant="h5">Пользователь «Хабра» нашёл в кнопочных телефонах вредоносные функции для перехвата SMS и тайной отправки данных в сеть</Typography>
						<Typography>Трояны и бэкдоры позволяют злоумышленникам списывать деньги со счёта и следить за личной перепиской.</Typography>
						<Image src="https://leonardo.osnova.io/ef6195fa-59c3-5dac-b405-770028469df5/-/preview/700/-/format/webp/" alt="" layout="fill" />
					</Paper>
				</div>
				<div className="rightSide"></div>
			</div>
		</div>
	);
}
