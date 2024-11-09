'use client'

import { useAppSession } from '@/hooks/useAppSession';
import { useThemes } from '@/hooks/useThemes';
import { themesService } from '@/services/themes.service';
import React, { ChangeEvent, useState } from 'react';

const ThemeSelector = () => {
	const { data, isError } = useThemes();
	const [selectedThemes, setSelectedThemes] = useState<string []>([])
	const {data: session} = useAppSession()

	const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const theme = event.target.value
		if (selectedThemes.includes(theme)) {
			setSelectedThemes(selectedThemes.filter(t => t !== theme));
		} else {
			setSelectedThemes([...selectedThemes, theme]);
		}
	}

	if (isError) {
		return (
			<>
				<p>Something went wrong</p>
			</>
		);
	}
	return (
		<>
			<div>
				<p>Choose the themes you are interested in</p>
			</div>
			<ul>
				{data.map((theme: string) => (
					<li key={theme}>
						<input type="checkbox" value={theme} checked={selectedThemes.includes(theme)} onChange={handleThemeChange}>
							{theme}
						</input>
					</li>
				))}
			</ul>
			{/* <button onClick={themesService.selectThemes(session?.user.id as number, selectedThemes)}>select</button> */}
		</>
	);
};

export default ThemeSelector;
