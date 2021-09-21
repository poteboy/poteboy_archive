## 集合とは

ある特定のものの集まりの事を集合と言い、その集合を構成する1つ1つのものの事を要素、または元と言う。

「リンゴ」というものは「果物」というを構成する要素の1つなので、リンゴは果物に属する、もしくはリンゴは果物の要素である、という風に言い、記号では$リンゴ \in 果物$と書く。また、要素が1つも存在しない集合を空集合と言い、記号では$\varnothing$と書く。


## 一意性と基礎的な演算

集合は、「属している要素は何か」だけによって一意に定まる。

つまり、1つの集合の中に同じ要素が重複することは許されず、その集合の中で各要素がどのように並んでいるかは問題ではなく、「集合$A$に属する全ての要素は全て集合$B$に属してして、集合$B$に属する全ての要素は全て集合$A$に属しているとき、集合$A$と$B$は等しい」と定められている。

これを外延の公理と言い、任意の集合$X$について記号を用いて以下のように表される。($\forall$は全称記号と読み、「全ての」という意味。$\Leftrightarrow$はif and only if、すなわち必要十分条件を表す。)

<br/>

$$
\forall A \forall B  
\left(
    \forall X
        \left(
            X \in A \Leftrightarrow X \in B
        \right) \Leftrightarrow A = B
\right)
$$

<br/>

## 論理演算とPythonの対応

Pythonでは集合はset型として用意されており、集合の演算とは次のように対応している。

<br/>

| 記号 |  読み   | Pythonの演算 |
| :-------: | :----: | :----: |
| $\subset$ | 部分集合(subset) | A <= B |
| $\cup$ | 和集合(union) | A $\vert$ B |
| $\cap$ | 積集合(intersection) | A & B |
| $-$ | 差集合(difference) | A - B |

<br/>

Pythonで上記の演算をする方法を紹介する前に、まずはset型のオブジェクトの基本的な扱い方を紹介する。

<br/>

## Pythonで集合

<br/>

リストやタプルのような可変長型のオブジェクトに対して`set()`をすると、Pythonで集合を扱う事ができる。

```python

arr = [1,2,3,4,5]
arr_set = set(arr)

print(arr_set)
# {1, 2, 3, 4, 5}

```

<br/>

空集合$\varnothing$を呼び出したい時は、引数を省略すればよい。

```python

arr_set = set()

print(arr_set)
# set()

```

<br/>

## 集合に要素の追加、削除

<br/>

Pythonでset型に値を追加する際は、`add`を使う

```python

arr_set = set()
arr_set.add(1)
# {1}

```
<br/>

`add`は引数を1つしかとる事ができないので、複数の値が入ったリストを集合に足したい場合は`update`を使う。

```python

arr_set = {1,2,3}
arr = [4,5,6]

arr_set.update(arr)

print(arr_set)
# {1, 2, 3, 4, 5, 6}

```

<br/>

集合からある特定の要素を削除したい場合は、`discard`を使う。

```python

arr_set = {1,2,3}

arr_set.discard(2)

print(arr_set)
# {1, 3}

```

<br/>

全ての要素を削除して空集合にする場合は、`clear`を使う。

```python

arr_set = {1,2,3}

arr_set.clear()

print(arr_set)
# set()

```

<br/>

## 部分集合

集合$A$、$B$において$A$の全ての要素が$B$の要素である時、$A$は$B$の部分集合であるといい、次のように書く。

<br/>

$$
    A \subset B
$$

<br/>

Pythonで部分集合かを確かめたい時は`<=`、もしくは`issubset`を使う。戻り値はBoolean型。

```python

arr_set = {1,2,3}
arr_set2 = {1,2}

print(arr_set2 <= arr_set)
print(arr_set2.issubset(arr_set))
# True
# True

```

<br/>

## 和集合

集合$A$、$B$において$A$の要素と$B$の要素を全て集めた集合を$A$と$B$の和集合といい、次のように書く。

<br/>

$$

A \cup B = 
\{
    x | x \in A または x \in B
\}

$$

<br/>

Pythonで和集合を求めたいときは`|`もしくは`union`を使う。

```python

arr_set = {1,2,3}
arr_set2 = {4,5,6}

print(arr_set2 | arr_set)
print(arr_set2.union(arr_set))
# {1, 2, 3, 4, 5, 6}
# {1, 2, 3, 4, 5, 6}

```

<br/>

## 積集合


集合$A$、$B$において$A$と$B$の両方に共通する要素の集合を積集合、または共通部分といい、次のように書く。

<br/>

$$

A \cap B = 
\{
    x | x \in A かつ x \in B
\}

$$

<br/>

Pythonで和集合を求めたいときは`&`もしくは`intersection`を使う。

```python

arr_set = {1,2,3}
arr_set2 = {2,3,4}

print(arr_set2 & arr_set)
print(arr_set2.intersection(arr_set))
# {2, 3}
# {2, 3}

```

<br/>


## 差集合

集合$A$、$B$において$A$に属し$B$に属さない要素の集合を差集合といい、次のように書く。

<br/>

$$

A - B = 
\{
    x | x \in A かつ x \notin B
\}

$$

<br/>

Pythonで差集合を求めたいときは`-`もしくは`difference`を使う。

```python

arr_set = {1,2,3}
arr_set2 = {2,3,4}

print(arr_set2 - arr_set)
print(arr_set2.difference(arr_set))
# {4}
# {4}

```

<br/>

## 参考

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/B079YZSYKY/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B079YZSYKY&linkCode=as2&tag=poteblog00-22&linkId=119766f61e7eed69fa31457a5d4b3c58"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B079YZSYKY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=poteblog00-22" ></a>

