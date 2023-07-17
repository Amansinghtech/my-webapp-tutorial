import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function Cars() {
	const router = useRouter()
	const [carName, setCarName] = useState('')
	useEffect(() => {
		const q = router.query.id as string
		console.log(q)
		if (q) {
			setCarName(q)
		}
	}, [router])

	return (
		<div>
			Cars
			<h1>{carName}</h1>
		</div>
	)
}

export default Cars
