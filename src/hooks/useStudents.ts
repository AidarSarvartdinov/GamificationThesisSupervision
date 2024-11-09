import { userService } from '@/services/user.service';
import { Student } from '@/types/student';
import { useQuery } from '@tanstack/react-query';

export function useStudents(professorId: number) {
	const { data, isError } = useQuery({
		queryKey: ['students'],
		queryFn: () => userService.getStudents(professorId),
		select: (data) => data.data,
	});

	return { data, isError };
}
