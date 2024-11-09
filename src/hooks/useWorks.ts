import { userService } from '@/services/user.service';
import { Work } from '@/types/work';
import { useQuery } from '@tanstack/react-query';

export function useWorks(professorId: number) {
	const { data, isError } = useQuery({
		queryKey: ['works', professorId],
		queryFn: () => userService.getProfessorsWorks(professorId),
		select: (data) => data.data as Work[],
		enabled: !!professorId,
	});

	return { data, isError };
}
