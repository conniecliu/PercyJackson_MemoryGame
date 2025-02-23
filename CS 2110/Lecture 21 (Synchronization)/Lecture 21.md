#### Ring Buffer 
- Bounded queue 
- elements are stored in a fixed-capacity array (has a head-pointer and size)
- `get`: advance head, return previous value (requires size > 0)
- `add`: store in next available index (requires size <  capacity)
	- `(head + size) % capacity`
![[Screenshot 2024-11-07 at 10.27.48 AM.png]]
- Head is 2, size is 2, and the next element would be added at 1
#### Locks 
- restricting `get` to one thread at a time isn't enough! `add` also modifies the size 
	- so, we need to guard mutable states 
- assign an object to represent the lock protecting the fields 
	- document the fields with `Guarded by: lock`
- a thread should "acquire" the lock and hold onto it while writing or reading any of these fields 
	- locks are acquired and held using a synchronized block 
![[Screenshot 2024-11-07 at 10.37.30 AM.png|500]]
##### Mutual exclusion locks (Mutex)
- only one thread may hold lock at a time 
	- other threads will block at the start of their synchronized block until the lock is available 
- not enforced by Java 
- common pattern: all of an object's mutable state is guarded by the object itself 
	- can synchronize an entire method by adding `synchronized` to its declaration
#### Deadlock 
Threads may acquire multiple locks at the sam time 
- could have separate guards for different fields 

If two threads are each blocked waiting for a lock held by the other, the program will hang. 
- Solution: always acquire locks in order 
	- allow one synchronized method to call another synchronized method 
#### Condition variables and monitors 
- Blocking until conditions change (AKA waiting)
##### Make consumer wait for producer 
1. Acquire lock 
2. Check if queue is empty 
3. If empty, release the lock and wait to be notified 
	1. after producing, notify all waiting threads 
4. Reacquire lock and check again whether the queue is empty 
	1. repeat until it is non-empty 
	2. another consumer may have already taken the new element 
5. Continue executing the `get` method 
6. Notify all waiting threads (producers may be waiting for queue to not be full)

![[Screenshot 2024-11-07 at 11.19.17 AM.png|600]]
```
synchronized (lock) {
	while (size == 0) { //the condition
		lock.wait(); // releases the mutex and blocks until lock is notified
	}

	T ans = store[iHead]
	iHead = (iHead + 1) % store.length;
	size--;
	lock.notifyAll(); // notifies all threads blocked on lock.wait()

	return ans;
}
```
![[Screenshot 2024-11-22 at 2.01.51 PM.png]]