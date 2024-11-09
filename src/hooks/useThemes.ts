import { themesService } from '@/services/themes.service';
import { useQuery } from '@tanstack/react-query';

export function useThemes() {
	const { data, isError } = useQuery({
		queryKey: ['themes'],
		queryFn: () => themesService.getThemesList(),
		select: (data) => data.data,
	});

	return { data, isError };
}
