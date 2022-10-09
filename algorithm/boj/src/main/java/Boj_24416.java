import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj_24416 {

  public static int[] arr;
  public static int countFib = 0;
  public static int countFibonacci = 0;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    br.close();

    arr = new int[n + 1];
    fib(n);
    fibonacci(n);

    System.out.print(countFib + " " + countFibonacci);
  }


  static int fib(int n) {
    if (n == 1 || n == 2) {
      countFib++;
      return 1;
    } else {
      return (fib(n - 1) + fib(n - 2));
    }
  }

  static int fibonacci(int n) {
    arr[1] = arr[2] = 1;
    for (int i = 3; i <= n; i++) {
      countFibonacci++;
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
  }

}
