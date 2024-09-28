'use client'
import { useState, useEffect } from 'react';

//nextui
import {
	Image,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Link
} from '@nextui-org/react'

//AOS - animate on scroll library
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='flex justify-around align-center'>
			<h1 className='text-5xl'>Landing Page</h1>
		</div>
	);
}
