<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
 MathJax.Hub.Config({
 tex2jax: {
 inlineMath: [['$', '$'] ],
 displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
 }
 });
</script>

## フィボナッチ数列とは

</br>

フィボナッチ数列は以下のような漸化式で表される数列のこと。

</br>

$$
F_1 = F_2 = 1 \\
F_{n + 2} = F_{n + 1} + F_n
$$

</br>

再帰的な構造を持つことからプログラミング初学者の間でよく解かされがちなので、皆さんも一度は見た事があるだろう。

Pythonで再帰関数を用いてフィボナッチ数列の$N$項目を求めるには、次のように書く。

</br>

```python

def fib(n: int) -> int:
    if n < 2:
        return 2
    return fib(n-2) + fib(n-1)
```
</br>

しかし、この方法だと指数関数的に計算量が増加し非効率なアルゴリズムであるため、メモ化というアルゴリズムを用いる。

</br>

## メモ化再帰

</br>

メモ化とは計算結果を保存しておいて、その数値が必要になった際に都度計算し直すのではなくその数値を参照するという手法で、
この手法を用いれば計算量は$O(N^2)$から$O(N)$まで減らす事ができる。

Pythonでメモ化を用いる際は、関数の前に`@lru_cache`と書くだけで自動でやってくれる。

</br>

```python

@lru_cache(max_size=None)
def fib(n: int) -> int:
    if n < 2:
        return 2
    return fib(n-2) + fib(n-1)

```

</br>

ここら辺までが大体私が大学でアルゴリズムとデータ構造の授業を履修した際に習った事なのだが、
行列を使えば実はもっと高速に（具体的には対数時間で）フィボナッチ数列の$N$項目を求める事ができる。

</br>

## フィボナッチ数列を行列式で求める

</br>

フィボナッチ数列は、行列を用いて次のように表す事ができる。

</br>

$$
\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right)^n
 = 
\left(
\begin{matrix} 
F_{n+1} & F_n \\ 
F_n & F_{n-1} 
\end{matrix}
\right)
$$

</br>

上記の性質は、帰納法を用いれば簡単に証明できる。

</br>

$$
\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right)^{n + 1}
 = 
\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right)^{n}
\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right) \\

=
\left(
\begin{matrix} 
F_{n+1} & F_n \\ 
F_n & F_{n-1} 
\end{matrix}
\right)
\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right) \\

=

\left(
\begin{matrix} 
F_{n+1} + F_{n} & F_{n+1} \\ 
F_n + F_{n-1} & F_{n} 
\end{matrix}
\right) \\

=
\left(
\begin{matrix} 
F_{n+1} & F_n \\ 
F_n & F_{n-1} 
\end{matrix}
\right)

$$

</br>

このとき$\left(
\begin{matrix} 
1 & 1 \\ 
1 & 0 
\end{matrix}
\right)$を$Q$とおくと、フィボナッチ数列の$N$項目は$Q^{n-1}$の1行1列目と等しい事が分かる。

つまり、$F_n$を求めるには$Q_{n-1}$を求めればよいと言うことになる。

</br>

## 再び再帰

</br>

ではどうすれば$Q_{n-1}$を対数時間で求めることができるのだろうか。

xのn乗というのは、[Exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring)という手法を用いれば対数時間で求める事ができる事が知られており、次のように表すことができる。

</br>

$$
x^n = 
\left\{ \begin{matrix}x(x^2)^{n-1 / 2}&(nが奇数のとき)\\ (x^2)^{n / 2}&(nが奇数のとき) \end{matrix} \right.
$$

</br>

つまり、$Q_{n}$という行列を求めたければ$Q_{n / 2}$を求めればよく、$Q_{n / 2}$を求めたければ$Q_{n / 4}$を求めれば良いことになる。

よって、時間計算量は$O(log N)$となる。

