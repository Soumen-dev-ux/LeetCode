const predictTheWinner = A => {
    const n = A.length;
    if (!(n & 1)) return true;

    const maxDiff = _.memoize(
        (i, j) => {
            if (i === j) return A[i];
            return Math.max(A[i] - maxDiff(i + 1, j),
                            A[j] - maxDiff(i, j - 1));
        },
        (i, j) => (i << 16) | j
    );

    return maxDiff(0, n - 1) >= 0;
};