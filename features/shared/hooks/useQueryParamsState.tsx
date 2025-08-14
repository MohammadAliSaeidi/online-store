import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseQueryParamsStateOptions {
	name: string;
	defaultValue?: string;
	onStateChange?: (value: string) => void;
}

interface UseQueryParamsStateReturn {
	value: string;
	updateUrlParam: (newValue: string) => void;
	clearUrlParam: () => void;
}

export function useQueryParamsState({
	name,
	defaultValue,
	onStateChange,
}: UseQueryParamsStateOptions): UseQueryParamsStateReturn {
	const router = useRouter();
	const searchParams = useSearchParams();

	// Track if this is the initial mount to avoid infinite loops
	const isInitialMount = useRef(true);
	const lastUpdatedValue = useRef<string | null>(null);

	// Get initial value from URL or use default
	const getInitialValue = useCallback(() => {
		const urlValue = searchParams.get(name);

		if (defaultValue !== undefined) {
			// If defaultValue is provided, URL takes precedence, fallback to default
			return urlValue ?? defaultValue;
		} else {
			// If no defaultValue, use URL value or empty string
			return urlValue ?? "";
		}
	}, [searchParams, name, defaultValue]);

	const [value, setValue] = useState<string>(getInitialValue);

	// Update URL when value changes (but avoid loops)
	const updateUrlParam = useCallback(
		(newValue: string) => {
			// Prevent unnecessary updates
			if (lastUpdatedValue.current === newValue) {
				return;
			}

			lastUpdatedValue.current = newValue;
			setValue(newValue);

			const current = new URLSearchParams(
				Array.from(searchParams.entries())
			);

			if (
				newValue === "" ||
				(defaultValue && newValue === defaultValue)
			) {
				current.delete(name);
			} else {
				current.set(name, newValue);
			}

			const search = current.toString();
			const query = search ? `?${search}` : "";

			router.replace(`${window.location.pathname}${query}`, {
				scroll: false,
			});

			// Call the optional callback
			onStateChange?.(newValue);
		},
		[router, searchParams, name, defaultValue, onStateChange]
	);

	// Clear URL parameter
	const clearUrlParam = useCallback(() => {
		updateUrlParam(defaultValue ?? "");
	}, [updateUrlParam, defaultValue]);

	// Sync URL changes to state (handle browser back/forward)
	useEffect(() => {
		const urlValue = searchParams.get(name);

		// On initial mount, sync default value to URL if no URL param exists
		if (isInitialMount.current) {
			isInitialMount.current = false;

			if (defaultValue !== undefined && urlValue === null) {
				// We have a default value but no URL param - sync default to URL
				updateUrlParam(defaultValue);
				return;
			}

			// If URL has a value different from our current state, update state
			if (urlValue !== null && urlValue !== value) {
				lastUpdatedValue.current = urlValue;
				setValue(urlValue);
				onStateChange?.(urlValue);
			}
			return;
		}

		// Handle subsequent URL changes (browser navigation)
		const currentValue = urlValue ?? defaultValue ?? "";

		// Skip if this update came from our own updateUrlParam call
		if (lastUpdatedValue.current === currentValue) {
			return;
		}

		// Update state to match URL
		if (currentValue !== value) {
			lastUpdatedValue.current = currentValue;
			setValue(currentValue);
			onStateChange?.(currentValue);
		}
	}, [
		searchParams,
		name,
		defaultValue,
		value,
		onStateChange,
		updateUrlParam,
	]);

	return {
		value,
		updateUrlParam,
		clearUrlParam,
	};
}
